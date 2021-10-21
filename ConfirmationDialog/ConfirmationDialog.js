const template = document.createElement('template');
template.innerHTML = `
    <link href="ConfirmationDialog/ConfirmationDialog.css" rel="stylesheet">
    <div class="confirmation-dialog">
        <h3 id="confirmation-dialog-message"></h3>
        <div class="confirmation-dialog-buttons-wrapper">
            <button id="confirmation-dialog-yes-button" class="confirmation-dialog-button">Yes</button>
            <button id="confirmation-dialog-cancel-button" class="confirmation-dialog-button">Cancel</button>
        </div>
    </div>
    `;

class ConfirmationDialog extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.style.display = 'none';
    }

    display(message, callback) {
        this.shadowRoot.querySelector('#confirmation-dialog-message').innerText = message;
        this.callback = callback;
        this.style.display = 'flex';
    }

    handleButtonClick(event) {
        this.style.display = 'none';
        this.callback(event.target.innerText);
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#confirmation-dialog-yes-button').addEventListener('click', this.handleButtonClick.bind(this));
        this.shadowRoot.querySelector('#confirmation-dialog-cancel-button').addEventListener('click', this.handleButtonClick.bind(this));
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#confirmation-dialog-yes-button').removeEventListener('click', this.handleButtonClick.bind(this));
        this.shadowRoot.querySelector('#confirmation-dialog-cancel-button').removeEventListener('click', this.handleButtonClick.bind(this));
    }
}

window.customElements.define('confirmation-dialog', ConfirmationDialog);

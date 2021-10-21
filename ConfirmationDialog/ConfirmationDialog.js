const template = document.createElement('template');
template.innerHTML = `
    <link href="ConfirmationDialog/ConfirmationDialog.css" rel="stylesheet">
    <div id="confirmation-dialog-backscreen">
        <div class="confirmation-dialog">
            <h3 id="confirmation-dialog-message"></h3>
            <div class="confirmation-dialog-buttons-wrapper">
                <button class="confirmation-dialog-button">Yes</button>
                <button class="confirmation-dialog-button">Cancel</button>
            </div>
        </div>
    </div>
    `;

class ConfirmationDialog extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("#confirmation-dialog-backscreen").style.display = 'none';
    }

    display(message, callback) {
        this.shadowRoot.querySelector("#confirmation-dialog-message").innerText = message;
        this.callback = callback;
        this.shadowRoot.querySelector("#confirmation-dialog-backscreen").style.display = 'flex';
    }
}

window.customElements.define('confirmation-dialog', ConfirmationDialog);

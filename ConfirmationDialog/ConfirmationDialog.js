const template = document.createElement('template');
template.innerHTML = `
    <link href="ConfirmationDialog/ConfirmationDialog.css" rel="stylesheet">
    <div class="confirmation-dialog-backscreen">
        <div class="confirmation-dialog">
            <h1 class="confirmation-dialog-message">Placeholder</h1>
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
    }
}

window.customElements.define('confirmation-dialog', ConfirmationDialog);

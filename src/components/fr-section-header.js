/**
 * Reusable section header component with number and title
 * 
 * Usage:
 * <fr-section-header number="01" title="READ_ME.md"></fr-section-header>
 */
class FrSectionHeader extends HTMLElement {
    static get observedAttributes() {
        return ['number', 'title'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const number = this.getAttribute('number') || '00';
        const title = this.getAttribute('title') || 'SECTION';

        this.innerHTML = `
      <div class="flex items-center gap-4 mb-8">
        <span class="text-terminal-green/90">${number}</span>
        <h2 class="text-xl font-bold bg-terminal-dim px-2">${title}</h2>
        <div class="flex-1 border-b border-terminal-dim"></div>
      </div>
    `;
    }
}

customElements.define('fr-section-header', FrSectionHeader);

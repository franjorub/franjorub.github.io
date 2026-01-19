/**
 * Contact section component with email and social links
 */
class FrContact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="scroll-mt-20 border border-terminal-green p-8 bg-terminal-green/5" id="contact">
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-2xl font-bold mb-4">INIT_CONNECTION_PROTOCOL</h2>
          <p class="mb-8 opacity-80">Currently accepting new project inquiries. Connection lines are open via the following secure channels:</p>
          <div class="flex flex-col gap-4 items-center">
            <a class="text-lg border-b border-terminal-green hover:bg-terminal-green hover:text-terminal-bg transition-all px-4" href="mailto:franjorub@gmail.com">franjorub@gmail.com</a>
            <div class="flex gap-8 mt-4">
              <a class="hover:text-white transition-colors" href="https://github.com/franjorub" target="_blank" rel="noopener noreferrer">[GITHUB]</a>
              <a class="hover:text-white transition-colors" href="https://linkedin.com/in/franjorub" target="_blank" rel="noopener noreferrer">[LINKEDIN]</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('fr-contact', FrContact);

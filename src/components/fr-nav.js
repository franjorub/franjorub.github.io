/**
 * Navigation component with terminal prompt and navigation links
 */
class FrNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="mb-12">
        <div class="flex flex-wrap justify-center sm:justify-start gap-x-4 sm:gap-x-8 gap-y-2 text-sm">
          <a class="hover:bg-terminal-green hover:text-terminal-bg px-2 py-0.5 transition-colors" href="#about">./ABOUT_ME</a>
          <a class="hover:bg-terminal-green hover:text-terminal-bg px-2 py-0.5 transition-colors" href="#stack">./TECH_STACK</a>
          <a class="hover:bg-terminal-green hover:text-terminal-bg px-2 py-0.5 transition-colors" href="#experience">./HISTORY</a>
          <a class="hover:bg-terminal-green hover:text-terminal-bg px-2 py-0.5 transition-colors" href="#contact">./CONNECT</a>
        </div>
        <div class="mt-4 flex items-center">
          <span class="mr-2">user@portfolio:~$</span>
          <span class="inline-block w-2.5 h-5 bg-terminal-green animate-pulse"></span>
        </div>
      </nav>
    `;
  }
}

customElements.define('fr-nav', FrNav);

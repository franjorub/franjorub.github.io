class FrBackToTop extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.setupScrollListener();
        this.setupClickHandler();
    }

    disconnectedCallback() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 48px;
          height: 48px;
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid #00ff41;
          color: #00ff41;
          font-family: 'Fira Code', monospace;
          font-size: 1.25rem;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 0.3s ease;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.4);
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
        }

        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .back-to-top:hover {
          background: #00ff41;
          color: #0a0a0a;
          text-shadow: none;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.6);
        }

        .back-to-top:active {
          transform: scale(0.95);
        }

        .arrow {
          display: block;
          animation: float 2s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .back-to-top:hover .arrow {
          animation: none;
        }

        @media (max-width: 768px) {
          .back-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
      </style>

      <button class="back-to-top" aria-label="Back to top" title="[SCROLL_TO_TOP]">
        <span class="arrow">▲</span>
      </button>
    `;
    }

    setupScrollListener() {
        const button = this.shadowRoot.querySelector(".back-to-top");

        this.handleScroll = () => {
            if (window.scrollY > 300) {
                button.classList.add("visible");
            } else {
                button.classList.remove("visible");
            }
        };

        window.addEventListener("scroll", this.handleScroll, { passive: true });
    }

    setupClickHandler() {
        const button = this.shadowRoot.querySelector(".back-to-top");

        button.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}

customElements.define("fr-back-to-top", FrBackToTop);

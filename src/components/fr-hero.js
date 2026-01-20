/**
 * Hero section component with title, description, and CTA buttons
 */
class FrHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        @keyframes hero-glow {
          0%, 100% {
            box-shadow: 
              0 0 5px rgba(0, 255, 65, 0.4),
              0 0 10px rgba(0, 255, 65, 0.2),
              inset 0 0 5px rgba(0, 255, 65, 0.1);
          }
          50% {
            box-shadow: 
              0 0 15px rgba(0, 255, 65, 0.6),
              0 0 30px rgba(0, 255, 65, 0.4),
              0 0 45px rgba(0, 255, 65, 0.2),
              inset 0 0 10px rgba(0, 255, 65, 0.2);
          }
        }

        @keyframes text-flicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.8; }
          94% { opacity: 1; }
          97% { opacity: 0.9; }
          98% { opacity: 1; }
        }

        @keyframes subtle-glitch {
          0%, 100% { 
            transform: translate(0);
            text-shadow: 0 0 5px rgba(0, 255, 65, 0.4);
          }
          99% { 
            transform: translate(0);
            text-shadow: 0 0 5px rgba(0, 255, 65, 0.4);
          }
          99.5% { 
            transform: translate(-2px, 1px);
            text-shadow: 
              -2px 0 #ff0000,
              2px 0 #00ffff,
              0 0 10px rgba(0, 255, 65, 0.6);
          }
        }

        .hero-box {
          animation: hero-glow 4s ease-in-out infinite;
        }

        .hero-title {
          animation: text-flicker 8s ease-in-out infinite, subtle-glitch 10s ease-in-out infinite;
        }

        .hero-cursor::after {
          content: '_';
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      </style>
      <section id="hero">
        <div class="mb-8">
          <div class="hero-box inline-block border border-terminal-green px-3 py-2 mb-6 sm:px-4">
            <h1 class="hero-title text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              SENIOR_SOFTWARE_ENGINEER<br />
              REACT_&amp;_JS_SPECIALIST<span class="hero-cursor"></span>
            </h1>
          </div>
          <p class="max-w-2xl text-base sm:text-lg opacity-90 leading-relaxed">
            &gt; I turn complex problems into elegant, scalable code.<br />
            &gt; Focus: High-performance web applications &amp; system architecture.
          </p>
        </div>
        <div class="flex flex-wrap gap-3 sm:gap-4">
          <a class="bg-terminal-green text-terminal-bg px-6 py-2 font-bold hover:opacity-90" href="https://linkedin.com/in/franjorub" target="_blank" rel="noopener noreferrer">EXEC talk.sh</a>
        </div>
      </section>
    `;
  }
}

customElements.define('fr-hero', FrHero);

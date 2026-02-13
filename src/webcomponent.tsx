import styles from "./index.css?inline";
import React from "react";
import ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";

import App from "./App";

// WebComponent wrapper (Shadow DOM ON)
const LandingElement = reactToWebComponent(App, React, ReactDOM, {
  shadow: "open",
});

if (!customElements.get("react-landing")) {
  customElements.define(
    "react-landing",
    class extends (LandingElement as any) {
      private _mounted = false;

      connectedCallback() {
        // Prevent double mount
        if (this._mounted) return;
        this._mounted = true;

        // Inject CSS BEFORE React mounts
        if (!this.shadowRoot?.querySelector("style")) {
          const styleTag = document.createElement("style");

          styleTag.textContent = `
            :host {
              display: block;
              font-family: Inter, system-ui, sans-serif;
              scroll-behavior: smooth;
            }

            :host *, :host *::before, :host *::after {
              box-sizing: border-box;
            }

            button, input, textarea {
              font: inherit;
            }

            ${styles}
          `;

          this.shadowRoot?.appendChild(styleTag);
        }

        // Mount React component
        super.connectedCallback();
      }

      disconnectedCallback() {
        // Allow remount if user comes back
        this._mounted = false;

        // Unmount React properly
        super.disconnectedCallback?.();
      }
    } as any
  );
}

import { LightningElement, api } from "lwc";
import { loadScript, loadStyle } from "lightning/platformResourceLoader";
import highlight from "@salesforce/resourceUrl/highlight";

export default class FeatureContainer extends LightningElement {
  @api feature;
  @api warning;
  @api code;
  @api clickHandler;
  prism;
  prismInitialized;

  renderedCallback() {
    this.loadPrism();
  }

  loadPrism() {
    this.prismInitialized = true;
    if (this.prism == undefined) {
      Promise.all([
        loadStyle(this, highlight + "/prism.css"),
        loadScript(this, highlight + "/prism.js")
      ])
        .then(() => {
          this.error = undefined;
          this.prism = Prism;
          this.highlightCodeSegment();
        })
        .catch((error) => {
          this.error = error;
        });
    } else {
      this.highlightCodeSegment();
    }
  }

  highlightCodeSegment() {
    if (this.code && this.prism) {
      const codeBlock = this.template.querySelector("code.language-javascript");
      if (codeBlock != undefined) {
        codeBlock.textContent = this.code;
      }
      this.prism.highlightElement(
        this.template.querySelector("code.language-javascript")
      );
    }
  }
}

import { LightningElement } from "lwc";
import { utils } from "./moduleExportsAux.js";

export default class ModuleExports extends LightningElement {
  moduleExports() {
    utils.dance("Astro", "rock");
    utils.default("Codey", "electronic music");
  }

  get code() {
    return `import { utils } from "./moduleExportsAux.js";

moduleExports() {
  utils.dance("Astro", "rock");
  utils.default("Codey", "electronic music");
}

// moduleExportsAux.js
export * as utils from "c/utils";
`;
  }
}

import { LightningElement } from "lwc";
import { utils } from "./moduleExportsAux.js";

export default class ModuleExports extends LightningElement {
  moduleExports() {
    utils.dance("Astro", "rock");
  }

  get code() {
    return this.moduleExports.toString();
  }
}

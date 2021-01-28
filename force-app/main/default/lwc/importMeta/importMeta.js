import { LightningElement } from "lwc";

export default class ImportMeta extends LightningElement {
  importMeta() {
    /* NOT WORKING ON PLATFORM
      console.log(import.meta);
      // expected output: module information
      */
  }

  get code() {
    return this.importMeta.toString();
  }
}

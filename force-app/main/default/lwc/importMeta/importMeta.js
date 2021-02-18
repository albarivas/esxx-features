import { LightningElement } from "lwc";

export default class ImportMeta extends LightningElement {
  importMeta() {
    /* NOT WORKING ON PLATFORM
      console.log(import.meta.url);
      // expected output: module location
      */
  }

  get code() {
    return `importMeta() {
      console.log(import.meta.url);
      // expected output: module location
    }`;
  }
}

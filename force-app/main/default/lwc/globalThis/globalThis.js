import { LightningElement } from "lwc";

export default class GlobalThis extends LightningElement {
  globalThis() {
    /* NOT WORKING ON PLATFORM
    console.log(typeof globalThis.XMLHttpRequest === "function");
    // expected output: true
    */
  }

  get code() {
    return this.globalThis.toString();
  }
}

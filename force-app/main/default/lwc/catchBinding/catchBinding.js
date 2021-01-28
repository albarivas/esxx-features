import { LightningElement } from "lwc";

export default class CatchBinding extends LightningElement {
  catchBinding() {
    const codey = {};
    try {
      codey.playGuitar();
    } catch {
      console.error("Codey couldn't play the guitar");
      // expected output: error - Codey couldn't play the guitar
    }
  }

  get code() {
    return this.catchBinding.toString();
  }
}

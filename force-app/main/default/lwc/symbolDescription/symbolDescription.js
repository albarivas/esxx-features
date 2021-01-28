import { LightningElement } from "lwc";

export default class SymbolDescription extends LightningElement {
  symbolDescription() {
    console.log(Symbol("Codey and Astro went to the party").description);
    // expected outpu: Codey and Astro went to the party
  }

  get code() {
    return this.symbolDescription.toString();
  }
}

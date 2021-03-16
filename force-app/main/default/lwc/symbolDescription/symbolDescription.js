import { LightningElement } from "lwc";

export default class SymbolDescription extends LightningElement {
  symbolDescription() {
    console.log(Symbol("Codey and Astro went to the party").description);
    // expected outpu: Codey and Astro went to the party

  /*
    // Symbol (ES6) - primitive used to identify object properties (avoid name clashing)
    const name = Symbol()
    const mascot = {
      [name]: 'Astro'
    }
    console.log(Object.keys(mascot));
    // expected output: []

    console.log(Object.getOwnPropertySymbols(mascot));
    // expected output: [Symbol()]

    // Each Symbol is unique
    console.log(Symbol() === Symbol());
    // expected output: false
  */
  }

  get code() {
    return `symbolDescription() {
  console.log(Symbol("Codey and Astro went to the party").description);
  // expected outpu: Codey and Astro went to the party
}`;
  }
}

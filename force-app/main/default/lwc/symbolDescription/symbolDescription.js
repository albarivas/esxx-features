import { LightningElement } from "lwc";

export default class SymbolDescription extends LightningElement {
  symbolDescription() {
    console.log(Symbol("Codey and Astro went to the party").description);
    // expected outpu: Codey and Astro went to the party

  /*
    // Symbol (ES6) - new primitive. Each symbol is unique.
    // Used for private properties, hidden metadata, constants...

console.log(Symbol() === Symbol());
// expected output: false

const name = Symbol()
const mascot = {
  [name]: 'Astro'
}
//expected output: {Symbol(): "Astro"}

console.log(mascot);

console.log(mascot[name]);
// expected output: Astro

console.log(mascot.name);
// expected output: undefined

  */
  }

  get code() {
    return `symbolDescription() {
  console.log(Symbol("Codey and Astro went to the party").description);
  // expected outpu: Codey and Astro went to the party
}`;
  }
}

import { LightningElement } from "lwc";

export default class NumericSeparators extends LightningElement {
  numericSeparators() {
    /* NOT WORKING ON PLATFORM
    const astroFollowers = 1_000_000;
    const codeyFollowers = 2_000_000;
    console.log(astroFollowers + codeyFollowers);
    // expected result: 3000000*/
  }

  get code() {
    return this.numericSeparators.toString();
  }
}

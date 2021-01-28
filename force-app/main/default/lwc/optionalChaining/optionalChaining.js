import { LightningElement } from "lwc";

export default class OptionalChaining extends LightningElement {
  optionalChaining() {
    const astro = { dancing: "Astro dances Salsa" };

    const favouriteSong = astro.singing?.favouriteSong;
    console.log(favouriteSong);
    // expected output: undefined (instead of error)
  }

  get code() {
    return this.optionalChaining.toString();
  }
}

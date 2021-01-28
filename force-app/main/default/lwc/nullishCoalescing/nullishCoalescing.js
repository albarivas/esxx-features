import { LightningElement } from "lwc";

export default class NullishCoalescing extends LightningElement {
  nullishCoalescing() {
    const astro = { dancing: "Astro dances Salsa" };

    const dancingAbilities = astro.dancing ?? "Astro doesn't know how to dance";
    console.log(dancingAbilities);
    // expected output: "Astro dances Salsa"

    const singingAbilities = astro.singing ?? "Astro doesn't know how to sing";
    console.log(singingAbilities);
    // expected output: "Astro doesn't know how to sing"
  }

  get code() {
    return this.nullishCoalescing.toString();
  }
}

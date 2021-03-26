import { LightningElement } from "lwc";

export default class NullishCoalescing extends LightningElement {
  nullishCoalescing() {
    const astro = { dancing: "Astro dances Salsa" };

    const dancingAbilities = astro.dancing ?? "Astro doesn't know how to dance";
    console.log(dancingAbilities);
    // expected output: "Astro dances Salsa"

    /* const astro = { dancing: "Astro dances Salsa" };
let dancingAbilities;
if (astro.dancing !== null && astro.dancing !== undefined) {
  dancingAbilities = astro.dancing;
} else {
  dancingAbilities = "Astro doesn't know how to dance"
}

console.log(dancingAbilities);
    */

    const singingAbilities = astro.singing ?? "Astro doesn't know how to sing";
    console.log(singingAbilities);
    // expected output: "Astro doesn't know how to sing"
  }

  get code() {
    return `nullishCoalescing() {
  const astro = { dancing: "Astro dances Salsa" };

  const dancingAbilities = astro.dancing ?? "Astro doesn't know how to dance";
  console.log(dancingAbilities);
  // expected output: "Astro dances Salsa"

  const singingAbilities = astro.singing ?? "Astro doesn't know how to sing";
  console.log(singingAbilities);
  // expected output: "Astro doesn't know how to sing"
}`;
  }
}

import { LightningElement } from "lwc";

export default class OptionalChaining extends LightningElement {
  optionalChaining() {
    const astro = { dancing: {favouriteSong : "Bohemian Rapsody"} };

    const favouriteDancingSong = astro.dancing?.favouriteSong;
    console.log(favouriteDancingSong);
    // expected output: undefined (instead of error)

    /* const astro = { dancing: {favouriteSong : "Bohemian Rapsody"} };
let favouriteDancingSong;
if (astro.dancing !== null && astro.dancing !== undefined) {
  favouriteDancingSong = astro.dancing.favouriteSong;
} else {
  favouriteDancingSong = undefined;
}

console.log(favouriteDancingSong);
    */

    const favouriteSingingSong = astro.singing?.favouriteSong;
    console.log(favouriteSingingSong);
    // expected output: undefined (instead of error)
  }

  get code() {
    return `optionalChaining() {
  const astro = { dancing: "Astro dances Salsa" };

  const favouriteSong = astro.singing?.favouriteSong;
  console.log(favouriteSong);
  // expected output: undefined (instead of error)
}`;
  }
}

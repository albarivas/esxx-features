import { LightningElement } from "lwc";

export default class ReplaceAll extends LightningElement {
  replaceAll() {
    const p = "Astro and Codey went to the cinema. Astro loved the movie!";

    console.log(p.replaceAll("Astro", "Cloudy"));
    // expected output: "Cloudy and Codey went to the cinema. Cloudy loved the movie!"
  }

  get code() {
    return this.replaceAll.toString();
  }
}

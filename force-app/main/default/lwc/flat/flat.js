import { LightningElement } from "lwc";

export default class Flat extends LightningElement {
  flat() {
    const arr1 = ["Astro", ["Codey", "Appy"]];

    console.log(arr1.flat());
    // expected output: ["Astro", "Codey", "Appy"]

    const arr2 = ["Astro", ["Codey", ["Appy", "Cloudy"]]];

    console.log(arr2.flat(1));
    // expected output: ["Astro", "Codey", ["Appy", "Cloudy"]]
  }

  get code() {
    return this.flat.toString();
  }
}

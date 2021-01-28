import { LightningElement } from "lwc";

export default class FlatMap extends LightningElement {
  flatMap() {
    const arr1 = ["Astro", "Codey", "Appy"];

    console.log(arr1.flatMap((x) => [x, x.toUpperCase()]));
    // expected output: ["Astro","ASTRO","Codey","CODEY",Appy","APPY"]
  }

  get code() {
    return this.flatMap.toString();
  }
}

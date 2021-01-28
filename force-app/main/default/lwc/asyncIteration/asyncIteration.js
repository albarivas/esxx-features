import { LightningElement } from "lwc";

export default class AsyncIteration extends LightningElement {
  async asyncIteration() {
    const iterables = [
      new Promise((resolve) => setTimeout(resolve("Astro"), 100)),
      "Codey",
      new Promise((resolve) => setTimeout(resolve("Appy"), 100))
    ];

    for await (const obj of iterables) {
      console.log(obj);
    }

    /* expected ouput
        Astro
        Codey
        Appy
    */
  }

  get code() {
    return this.asyncIteration.toString();
  }
}

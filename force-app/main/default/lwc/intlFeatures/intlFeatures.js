import { LightningElement } from "lwc";

export default class IntlFeatures extends LightningElement {
  intlFeatures() {
    const mascots = ["Astro", "Codey", "Appy"];

    const formatter = new Intl.ListFormat("en", {
      style: "long",
      type: "conjunction"
    });
    console.log(formatter.format(mascots));
    // expected output: Astro, Codey, and Appy

    const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
    console.log(
      new Intl.DateTimeFormat("en-GB", {
        dateStyle: "full",
        timeStyle: "long"
      }).format(date)
    );
    // Expected output "Sunday, 20 December 2020 at 14:23:16 GMT+11"
  }

  get code() {
    return this.intlFeatures.toString();
  }
}

import { LightningElement } from "lwc";

export default class Trim extends LightningElement {
  trim() {
    const greeting = "   Codey and Cloudy are best friends!   ";

    console.log(greeting);
    // expected output: "   Codey and Cloudy are best friends!   ";

    console.log(greeting.trimStart());
    // expected output: "Codey and Cloudy are best friends!   ";

    console.log(greeting.trimEnd());
    // expected output: "   Codey and Cloudy are best friends!";
  }

  get code() {
    return this.trim.toString();
  }
}

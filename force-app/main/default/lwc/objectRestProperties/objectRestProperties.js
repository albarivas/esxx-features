import { LightningElement } from "lwc";

export default class ObjectRestProperties extends LightningElement {
  objectRestProperties() {
    const astro = {
      name: "Astro",
      age: 5,
      hobby: "tennis"
    };

    const { hobby, ...newAstro } = astro;

    console.log(hobby);
    // expected output: tennis

    console.log(newAstro);
    // expected output: Object { age: 5, hobby: "tennis" }
  }

  get code() {
    return this.objectRestProperties.toString();
  }
}

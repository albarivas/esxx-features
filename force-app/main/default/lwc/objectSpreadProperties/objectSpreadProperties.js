import { LightningElement } from "lwc";

export default class ObjectSpreadProperties extends LightningElement {
  objectSpreadProperties() {
    const astro = { name: "Astro", age: 5 };

    const newAstro = { ...astro, hobby: "biking" };

    console.log(newAstro);
    // expected output: Object {name: "Astro", age: 5, hobby: "biking"}
  }

  get code() {
    return this.objectSpreadProperties.toString();
  }
}

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

  /* 
    // Destructuring Assignment (ES6)

let mascot1, mascot2, rest;
[mascot1, mascot2, ...rest] = ["Astro", "Codey", "Appy", "Blaze"];
console.log(rest)

    // expected output: ["Appy", "Blaze"]
  */

  }

  get code() {
    return `objectRestProperties() {
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
}`;
  }
}

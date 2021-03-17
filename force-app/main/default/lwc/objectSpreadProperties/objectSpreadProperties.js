import { LightningElement } from "lwc";

export default class ObjectSpreadProperties extends LightningElement {
  objectSpreadProperties() {
    const astro = { name: "Astro", age: 5 };

    const newAstro = { ...astro, hobby: "biking" };

    console.log(newAstro);
    // expected output: Object {name: "Astro", age: 5, hobby: "biking"}

  /* 
    // Spread Syntax (ES6)

    const mascot1 = "Astro";
    const mascot2 = "Codey";
    const spread = ["Appy", "Blaze"];
    const mascots = [mascot1, mascot2, ...spread];
    console.log(mascots)

    // expected output: ["Astro", "Codey", "Appy", "Blaze"]
  */

  /* 
    // Spread Syntax in Function Parameters (ES6)

    const mascot1 = "Astro";
    const mascot2 = "Codey";
    const spread = ["Appy", "Blaze"];

    const print = (m1, m2, m3, m4) => {
      console.log(`${m1}, ${m2}, ${m3} and ${m4} went to the cinema`);
    }

    print(mascot1, mascot2, ...spread);
    // expected output: Astro, Codey, Appy and Blaze went to the cinema
  */
  }

  get code() {
    return `objectSpreadProperties() {
  const astro = { name: "Astro", age: 5 };

  const newAstro = { ...astro, hobby: "biking" };

  console.log(newAstro);
  // expected output: Object {name: "Astro", age: 5, hobby: "biking"}
}`;
  }
}

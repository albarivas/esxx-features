import { LightningElement } from "lwc";

export default class FromEntries extends LightningElement {
  fromEntries() {
    // Multidimensional array or map
    const entries = new Map([
      ["name", "Astro"],
      ["age", 5],
      ["hobbies", ["dancing", "hiking"]]
    ]);

    const obj = Object.fromEntries(entries);

    console.log(obj);
    // expected output: Object { name: "Astro", age: 5, hobbies: ["dancing", "hiking"] }
  }

  get code() {
    return `fromEntries() {
  const entries = new Map([
    ["name", "Astro"],
    ["age", 5],
    ["hobbies", ["dancing", "hiking"]]
  ]);

  const obj = Object.fromEntries(entries);

  console.log(obj);
  // expected output: Object { name: "Astro", age: 5, hobbies: ["dancing", "hiking"] }
}`;
  }
}

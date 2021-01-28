import { LightningElement } from "lwc";

export default class MatchAll extends LightningElement {
  matchAll() {
    const pattern = "Astro|Codey";
    const str =
      "Astro and Codey went dancing. Astro really enjoyed it, while Codey didn't like it at all!";

    const found = [...str.matchAll(pattern)];

    console.log(found);
    /* expected output: 
      [
        ["Astro", index: 0, input: "Astro and Codey went dancing. Astro really enjoyed it, while Codey didn't like it at all!", groups: undefined]
        ["Codey", index: 10, input: "Astro and Codey went dancing. Astro really enjoyed it, while Codey didn't like it at all!", groups: undefined]
        ["Astro", index: 30, input: "Astro and Codey went dancing. Astro really enjoyed it, while Codey didn't like it at all!", groups: undefined]
        ["Codey", index: 61, input: "Astro and Codey went dancing. Astro really enjoyed it, while Codey didn't like it at all!", groups: undefined]
      ]
    */
  }

  get code() {
    return this.matchAll.toString();
  }
}

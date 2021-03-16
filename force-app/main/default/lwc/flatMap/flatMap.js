import { LightningElement } from "lwc";

export default class FlatMap extends LightningElement {
  flatMap() {
    const mascots = ["Astro", "Codey", "Appy"];

    console.log(mascots.flatMap((x) => [x, x.toUpperCase()]));
    // expected output: ["Astro","ASTRO","Codey","CODEY",Appy","APPY"]

    /* 
      const mascots = ["Astro", "Codey", "Appy"];

      const flattenedMascots = mascots.map((x) => [x, x.toUpperCase()]);

      console.log(flattenedMascots);
      // expected output: [["Astro","ASTRO]",["Codey","CODEY"],["Appy","APPY"]]

      console.log(flattenedMascots.flat());
      // expected output: ["Astro","ASTRO","Codey","CODEY","Appy","APPY"]
    */
  }

  get code() {
    return `flatMap() {
  const mascots = ["Astro", "Codey", "Appy"];

  console.log(mascots.flatMap((x) => [x, x.toUpperCase()]));
  // expected output: ["Astro","ASTRO","Codey","CODEY",Appy","APPY"]
}`;
  }
}

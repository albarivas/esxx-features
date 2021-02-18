import { LightningElement } from "lwc";

export default class LogicalAssignment extends LightningElement {
  logicalAssignment() {
    /* NOT WORKING ON PLATFORM
    // Logical OR Assignment
    let astroAge = 5;
    let codeyAge = undefined;

    astroAge ||= 6;
    console.log(astroAge);
    // expected output: 5

    codeyAge ||= 6;
    console.log(codeyAge);
    // expected output: 6

    // Logical AND Assignment
    let cloudyAge = 5;
    let appyAge = undefined;

    cloudyAge &&= 6;
    console.log(cloudyAge);
    // expected output: 6

    appyAge &&= 6;
    console.log(appyAge);
    // expected output: undefined

    // Logical nullish Assignment
    const mascot = { name: "Astro" };

    mascot.name ??= "Codey";
    console.log(mascot.name);
    // expected output: "Astro"

    mascot.age ??= 5;
    console.log(mascot.age);
    // expected output: 5*/
  }

  get code() {
    return this.logicalAssignment.toString();
  }
}

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

    astroAge &&= 6;
    console.log(astroAge);
    // expected output: 6

    codeyAge &&= 6;
    console.log(codeyAge);
    // expected output: undefined

    // Logical nullish Assignment
    const mascot = { name: "Astro" };

    mascot.name ??= "Codey";
    console.log(a.name);
    // expected output: "Astro"

    a.age ??= 5;
    console.log(a.age);
    // expected output: 5*/
  }

  get code() {
    return this.logicalAssignment.toString();
  }
}

import { LightningElement } from "lwc";

export default class Finalizers extends LightningElement {
  finalizers() {
    /* NOT WORKING ON PLATFORM
    const registry = new FinalizationRegistry((value) => {
      console.log(
        `${value} - It has just been collected by the garbage collector!`
      );
    });
    const astro = {};
    registry.register(astro, "Thanks for creating this astro object!");
    // expected output (after some time): Thanks for creating this astro object!
    */
  }

  get code() {
    return this.finalizers.toString();
  }
}

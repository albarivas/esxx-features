import { LightningElement } from 'lwc';

export default class PrivateMethodsAndAccessors extends LightningElement {

  privateMethodsAndAccessors() {
    stories = new MascotsStories();
    console.log(stories.mascot);
    // expected output: Codey

    console.log(stories.dance("Astro", "salsa"));
    // expected output: Astro danced salsa
  }
}

class MascotsStories {
  /* NOT WORKING ON PLATFORM
  // Private accessor
  get #mascot() { return 'Codey' }
  set #mascot(value) {}

  // Private method
  #dance(mascot, music) {
    console.log(`${mascot} danced ${music}`);
  }*/
}
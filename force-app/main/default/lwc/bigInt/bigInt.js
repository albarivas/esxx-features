import { LightningElement } from "lwc";

export default class BigInt extends LightningElement {
  bigInt() {
    /* NOT WORKING ON PLATFORM
    const astroFans = BigInt(
      "0b11111111111111111111111111111111111111111111111111111"
    );
    console.log(typeof astroFans == BigInt);
    */
  }

  get code() {
    return this.bigInt.toString();
  }
}

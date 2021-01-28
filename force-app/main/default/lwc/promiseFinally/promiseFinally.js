import { LightningElement } from "lwc";

export default class PromiseFinally extends LightningElement {
  promiseFinally() {
    Promise.resolve("Salesforce mascots are super fun!")
      .then((value) => console.log(value))
      .catch((error) => console.error(error))
      .finally(() => console.log("Yes, they definitely are"));
    /* expected output:
        Salesforce mascots are super fun!
        Yes, they definitely are
    */

    Promise.reject("Learning new JavaScript features is hard")
      .then((value) => console.log(value))
      .catch((error) => console.error(error))
      .finally(() => console.log("I hope these examples help you!"));
    /* expected output:
        error - Learning new JavaScript features is hard
        I hope these examples help you!
    */
  }

  get code() {
    return this.promiseFinally.toString();
  }
}

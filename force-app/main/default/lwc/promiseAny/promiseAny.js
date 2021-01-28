import { LightningElement } from "lwc";

export default class PromiseAny extends LightningElement {
  promiseAny() {
    const promise1 = Promise.resolve("Astro enjoyed dancing");
    const promise2 = Promise.resolve("Codey liked it too!");
    const promises = [promise1, promise2];

    Promise.any(promises)
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err);
      });

    /* expected output: 
      Astro enjoyed dancing
    */

    const promise3 = Promise.reject("Astro didn't enjoy skating");
    const promise4 = Promise.reject("Codey didn't like it either!!");
    const morePromises = [promise3, promise4];

    Promise.any(morePromises)
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err);
      });

    /* expected output: 
        AggregateError: All promises were rejected
    */
  }

  get code() {
    return this.promiseAny.toString();
  }
}

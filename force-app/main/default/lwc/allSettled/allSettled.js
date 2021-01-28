import { LightningElement } from "lwc";

export default class AllSettled extends LightningElement {
  allSettled() {
    const promise1 = Promise.resolve("Astro enjoyed dancing");
    const promise2 = Promise.reject("Codey didn't like it at all!");
    const promises = [promise1, promise2];

    Promise.allSettled(promises).then((results) =>
      results.forEach((result) => console.log(result.status))
    );
    /* Expected output: 
      fulfilled
      rejected
    */
  }

  get code() {
    return this.allSettled.toString();
  }
}

import { LightningElement } from "lwc";

export default class AllSettled extends LightningElement {
  allSettled() {
    const promise1 = Promise.resolve("Astro enjoyed dancing");
    const promise2 = new Promise((resolve, reject) =>
      setTimeout(reject, 100, "Codey didn't like it at all!")
    );
    const promises = [promise1, promise2];

    Promise.allSettled(promises).then((results) =>
      results.forEach((result) => console.log(result.status))
    );
    /* Expected output: 
      fulfilled
      rejected
    */
  }
}

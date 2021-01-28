import { LightningElement } from "lwc";

export default class DynamicImport extends LightningElement {
  dynamicImport() {
    /* NOT WORKING ON PLATFORM
      import("c/utils")
      .then((obj) => obj.print())
      .catch((err) => console.log("Error loading module" + err));*/
  }

  get code() {
    return this.dynamicImport.toString();
  }
}

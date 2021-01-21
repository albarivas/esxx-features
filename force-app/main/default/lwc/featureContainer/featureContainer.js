import { LightningElement, api } from "lwc";

export default class FeatureContainer extends LightningElement {
  @api feature;
  @api warning;
}

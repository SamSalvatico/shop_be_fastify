/* eslint-disable no-underscore-dangle */

export default class BaseModel {
  public _id!: string;

  get id(): string {
    return this._id;
  }
}

import { FastifyInstance } from "fastify";

export default class BaseModel {
  private static _collectionName: string;

  public _id!: string;

  get collectionName() {
    return BaseModel._collectionName;
  }

  get id(): string {
    return this._id;
  }

  get pathPrefix() {
    return BaseModel._collectionName;
  }

  public toResponse() {
    //delete this._collectionName;
    return this;
  }

}

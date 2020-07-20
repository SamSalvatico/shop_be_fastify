import { FastifyInstance } from "fastify";

export default class BaseModel {
  private fastifyInstance: any;
  public static collectionName: string;
  public _id!: string;

  constructor(fastifyInstance: any) {
    this.fastifyInstance = fastifyInstance;
  }

  get id(): string {
    return this._id;
  }

  get pathPrefix() {
    return BaseModel.collectionName;
  }
}

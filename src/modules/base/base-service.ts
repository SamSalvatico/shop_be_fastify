import BaseModel from "./base-model";
import { ObjectId } from "mongodb";

export default class BaseService {
  private modelType: any;
  private fastifyInstance: any;
  protected _collection: string = "";
  constructor(modelType: any, fastifyInstance: any) {
    this.modelType = modelType.constructor;
    this.fastifyInstance = fastifyInstance;
  }

  get collectionName() {
    return this._collection;
  }

  public create(body: any) {
    //this.fastifyInstance.mongo.db
    //.fastifyInstance.mongo.db.collection(this.model.collectionName)
  }

  public async show(id: string) {
    const resp = await this.fastifyInstance.mongo.db.collection(this.collectionName).findOne({ _id: new ObjectId(id) });
    return resp;
  }

  public async index() {
    const resp = await this.fastifyInstance.mongo.db.collection(this.collectionName).find({});
    return resp.toArray();
  }
}

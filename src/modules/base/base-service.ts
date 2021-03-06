/* eslint-disable no-param-reassign */
/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
import { ObjectId } from 'mongodb';
import BaseModel from './base-model';

export default class BaseService {
  protected modelType: any;

  protected fastifyInstance: any;

  protected _collection = '';

  constructor(modelType: any, fastifyInstance: any) {
    this.modelType = modelType;
    this.fastifyInstance = fastifyInstance;
  }

  get collectionName(): string {
    return this._collection;
  }

  get pathPrefix(): string {
    return `/${this._collection}`;
  }

  public async create(body: any): Promise<BaseModel> {
    try {
      const resp = await this.fastifyInstance.mongo.db.collection(this.collectionName).insertOne(body);
      if (resp == null || resp === undefined || resp.ops.length < 1) {
        throw new Error("Insert didn't work");
      } else {
        return Object.assign(new this.modelType(), resp.ops[0]);
      }
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  public async show(id: string): Promise<BaseModel> {
    try {
      const resp = await this.fastifyInstance.mongo.db.collection(this.collectionName)
        .findOne({ _id: new ObjectId(id) });
      return resp;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  public async delete(id: string): Promise<{ _id: string } | null> {
    try {
      const resp = await this.fastifyInstance.mongo.db.collection(this.collectionName)
        .deleteOne({ _id: new ObjectId(id) });
      if (
        resp == null
        || resp === undefined
        || resp.deletedCount === undefined
        || resp.deletedCount == null
        || resp.deletedCount === 0
      ) {
        return null;
      }
      return { _id: id };
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  public async index(): Promise<BaseModel[]> {
    try {
      const resp = await this.fastifyInstance.mongo.db.collection(this.collectionName).find({});
      return resp.toArray();
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  public async update(id: string, body: any): Promise<BaseModel | null> {
    try {
      delete body._id;
      const resp = await this.fastifyInstance.mongo.db.collection(this.collectionName)
        .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: body }, { returnOriginal: false });
      if (resp != null && resp !== undefined && resp.value != null && resp.value !== undefined) {
        return resp.value;
      }
      return null;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
import { ObjectId } from 'mongodb';
import BaseModel from './base-model';

export default class BaseService {
  private modelType: any;

  private fastifyInstance: any;

  protected _collection = '';

  constructor(modelType: any, fastifyInstance: any) {
    this.modelType = modelType;
    this.fastifyInstance = fastifyInstance;
  }

  get collectionName(): string {
    return this._collection;
  }

  public async create(body: any): Promise<BaseModel> {
    try {
      const resp = await this.fastifyInstance.mongo.db.collection(this.collectionName).insertOne(body);
      if (resp == null || resp === undefined || resp.ops.length < 1) {
        throw new Error("Insert didn't work");
      }
      else {
        return Object.assign(new this.modelType(), resp.ops[0]);
      }
    }
    catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  public async show(id: string): Promise<BaseModel> {
    try {
      const resp = await this.fastifyInstance.mongo.db.collection(this.collectionName)
        .findOne({ _id: new ObjectId(id) });
      // if (resp !== null && resp !== undefined) {
      //   return Object.assign(new this.modelType(), resp);
      // }
      return resp;
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
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import BaseService from '../base/base-service';
import User from './user-model';

export default class UserService extends BaseService {
  _collection = 'users';

  public async login(body: any): Promise<User> {
    try {
      const resp = await this.fastifyInstance.mongo.db.collection(this.collectionName)
        .findOne({ email: body.email });
      return resp;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
}

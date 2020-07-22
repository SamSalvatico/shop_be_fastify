import BaseModel from '../base/base-model';

export default class User extends BaseModel {
  public name!: string;

  public email!: string;

  public password!: string;

  public tokens: [] = [];
}

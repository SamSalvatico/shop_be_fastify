export default class BaseModel {
  private db: any;
  protected collectionName: string;
  public _id: string;

  constructor(dbInstance: any) {
    this.db = dbInstance;
  }

  get id(): string {
    return this._id;
  }

  get pathPrefix() {
    return this.collectionName;
  }
}

export default class ProductCategory {
  private db: any;
  protected collectionName: string = "product_categories";

  public name: string;
  public abstract?: string;
  public description?: string;
  public image_path?: string;
  public meta_title?: string;
  public meta_keywords?: string;
  public meta_description?: string;
  public url_friendly_name?: string;
  public published?: boolean;

  constructor(dbInstance: any) {
    this.db = dbInstance;
  }
}

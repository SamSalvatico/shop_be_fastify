import BaseModel from "../base/base-model";

export default class ProductCategory extends BaseModel {
  collectionName = "product_categories";

  public name: string;
  public abstract?: string;
  public description?: string;
  public image_path?: string;
  public meta_title?: string;
  public meta_keywords?: string;
  public meta_description?: string;
  public url_friendly_name?: string;
  public published?: boolean;
}

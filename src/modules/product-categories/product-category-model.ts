import BaseModel from '../base/base-model';

export default class ProductCategory extends BaseModel {
  _collectionName = 'product_categories';
  // private _name!: string;
  // private _abstract?: string | null = null;
  // private _description?: string | null = null;
  // private _image_path?: string | null = null;
  // private _meta_title?: string | null = null;
  // private _meta_keywords?: string | null = null;
  // private _meta_description?: string | null = null;
  // private _url_friendly_name?: string | null = null;
  // private _published: boolean = true;

  public name!: string;

  public abstract?: string | null = null;

  public description?: string | null = null;

  public image_path?: string | null = null;

  public meta_title?: string | null = null;

  public meta_keywords?: string | null = null;

  public meta_description?: string | null = null;

  public url_friendly_name?: string | null = null;

  public published = true;
}

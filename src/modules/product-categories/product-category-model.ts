import BaseModel from '../base/base-model';

export default class ProductCategory extends BaseModel {
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

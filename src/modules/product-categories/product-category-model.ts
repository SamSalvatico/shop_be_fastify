import BaseModel from "../base/base-model";

export default class ProductCategory extends BaseModel {
  _collectionName: string = "product_categories";
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
  public published: boolean = true;

  // set name(value: string) {
  //   this._name = value;
  // }

  // get name() {
  //   return this._name;
  // }

  // set abstract(value: string | undefined | null) {
  //   this._abstract = value;
  // }

  // get abstract() {
  //   return this._abstract;
  // }

  // get description() {
  //   return this._description;
  // }

  // set description(value: string | undefined | null) {
  //   this._description = value;
  // }

  // get image_path() {
  //   return this._image_path;
  // }

  // set image_path(value: string | undefined | null) {
  //   this._image_path = value;
  // }

  // get meta_title() {
  //   return this._meta_title;
  // }

  // set meta_title(value: string | undefined | null) {
  //   this._meta_title = value;
  // }

  // get meta_keywords() {
  //   return this._meta_keywords;
  // }

  // set meta_keywords(value: string | undefined | null) {
  //   this._meta_keywords = value;
  // }

  // get meta_description() {
  //   return this._meta_description;
  // }
  // set meta_description(value: string | undefined | null) {
  //   this._meta_description = value;
  // }

  // get url_friendly_name() {
  //   return this._url_friendly_name;
  // }

  // set url_friendly_name(value: string | undefined | null) {
  //   this._url_friendly_name = value;
  // }

  // get published() {
  //   return this._published;
  // }

  // set published(value: boolean) {
  //   this._published = value;
  // }
}

import BaseSchema from "../base/base-schema"

export default class ProductCategorySchema extends BaseSchema {
  properties = {
    _id: {
      type: "string"
    },
    name: {
      type: "string"
    },
    abstract: {
      type: "string"
    },
    description: {
      type: "string"
    },
    image_path: {
      type: "string"
    },
    meta_title: {
      type: "string"
    },
    meta_keywords: {
      type: "string"
    },
    meta_description: {
      type: "string"
    },
    url_friendly_name: {
      type: "string"
    },
    published: {
      type: "boolean"
    }
  };
}

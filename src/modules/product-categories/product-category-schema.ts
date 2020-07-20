import BaseSchema from '../base/base-schema';

export default class ProductCategorySchema extends BaseSchema {
  properties = {
    _id: {
      type: 'string',
      nullable: false,
    },
    name: {
      type: 'string',
      nullable: false,
    },
    abstract: {
      type: 'string',
      nullable: true,
    },
    description: {
      type: 'string',
      nullable: true,
    },
    image_path: {
      type: 'string',
      nullable: true,
    },
    meta_title: {
      type: 'string',
      nullable: true,
    },
    meta_keywords: {
      type: 'string',
      nullable: true,
    },
    meta_description: {
      type: 'string',
      nullable: true,
    },
    url_friendly_name: {
      type: 'string',
      nullable: true,
    },
    published: {
      type: 'boolean',
      nullable: false,
    },
  };

  required = ['name'];
}

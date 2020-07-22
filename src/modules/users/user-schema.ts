import BaseSchema from '../base/base-schema';

export default class UserSchema extends BaseSchema {
  properties = {
    _id: {
      type: 'string',
      nullable: false,
    },
    name: {
      type: 'string',
      nullable: false,
    },
    email: {
      type: 'string',
      nullable: false,
    },
    password: {
      type: 'string',
      nullable: false,
    },
    tokens: {
      type: 'array',
      items:
      {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            nullable: false,
          },
          token: {
            type: 'string',
            nullable: false,
          },
        },
      },
    },
  };

  required = ['name', 'email'];
}

/* eslint-disable class-methods-use-this */
export default class BaseSchema {
  public properties = {};

  public required: string[] = [];

  get getOneSchema(): any {
    return {
      response: {
        '2xx': {
          type: 'object',
          properties: this.properties,
        },
      },
    };
  }

  get getAllSchema(): { response: any } {
    return {
      response: {
        '2xx': {
          type: 'array',
          items: {
            type: 'object',
            properties: this.properties,
          },
        },
      },
    };
  }

  get createSchema(): { response: any, body: any } {
    return {
      body: {
        type: 'object',
        required: this.required,
        properties:
          this.properties,
      },
      response: {
        '2xx': {
          type: 'object',
          properties: this.properties,
        },
      },
    };
  }

  get updateSchema(): { response: any, body: any } {
    return {
      body: {
        type: 'object',
        required: this.required,
        properties:
          this.properties,
      },
      response: {
        '2xx': {
          type: 'object',
          properties: this.properties,
        },
      },
    };
  }

  get deleteSchema(): { response: any } {
    return {
      response: {
        '2xx': {
          type: 'object',
          properties: { _id: { type: 'string' } },
        },
      },
    };
  }
}

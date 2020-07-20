
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

  get getAllSchema() {
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

  get createSchema() {
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

  get updateSchema() {
    return {
      body: this.properties,
      response: {
        '2xx': {
          type: 'object',
          properties: this.properties,
        },
      },
    };
  }

  get deleteSchema() {
    return {
      response: {
        '2xx': {
          type: 'object',
          properties: { _id: { type: "string" } },
        },
      },
    }
  }
}

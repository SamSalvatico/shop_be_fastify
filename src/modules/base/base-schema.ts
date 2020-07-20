
export default class BaseSchema {
  public properties = {};
  public required: string[] = [];
  get getOneSchema(): any {
    return {
      response: {
        200: {
          type: 'object',
          properties: this.properties,
        },
      },
    };
  }

  get getAllSchema() {
    return {
      response: {
        200: {
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
        201: {
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
        200: {
          type: 'object',
          properties: this.properties,
        },
      },
    };
  }

  get deleteSchema() {
    return {
      response: {
        204: {
          type: 'object',
          properties: this.properties,
        },
      },
    }
  }
}

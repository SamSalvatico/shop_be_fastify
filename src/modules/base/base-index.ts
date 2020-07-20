import BaseService from "./base-service";
import BaseSchema from "./base-schema";
import { FastifyInstance } from "fastify";

export default class BaseIndex {
  private prefix: string;
  private fastifyInstance: any;
  private service: BaseService;
  private schema: BaseSchema;
  constructor(fastifyInstance: FastifyInstance, serviceToUse: BaseService, prefix: string, schema: BaseSchema) {
    this.prefix = prefix;
    this.fastifyInstance = fastifyInstance;
    this.service = serviceToUse;
    this.schema = schema;
  }

  public register() {

    this.fastifyInstance.post(this.prefix, { schema: this.schema.createSchema }, this.create);
    //this.fastifyInstance.get(this.prefix, { schema: this.schema.getOneSchema }, this.show);
    this.fastifyInstance.get(this.prefix, { schema: this.schema.getAllSchema }, async (request: any, reply: any) => {
      const resp = await this.service.index();
      return reply.send(resp);
    });
    this.fastifyInstance.get(this.prefix + '/:id', { schema: this.schema.getOneSchema }, async (request: any, reply: any) => {
      const resp = await this.service.show(request.params.id);
      return reply.send(resp);
    });

  }

  public async create(req: any, res: any) {
    return {};
  }

  public async show(request: any, reply: any) {
    const resp = await this.service.show(request.params.id);
    return reply.send(resp);
    //return reply.send({ "name": "u" });
  }
}

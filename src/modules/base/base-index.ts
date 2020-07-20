import BaseService from "./base-service";
import BaseSchema from "./base-schema";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

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
    this.fastifyInstance.post(
      this.prefix,
      { schema: this.schema.createSchema },
      async (request: FastifyRequest, reply: FastifyReply) => this.create(request, reply)
    );
    this.fastifyInstance.get(
      this.prefix,
      { schema: this.schema.getAllSchema },
      async (request: FastifyRequest, reply: FastifyReply) => this.index(request, reply)
    );
    this.fastifyInstance.get(
      this.prefix + '/:id',
      { schema: this.schema.getOneSchema },
      async (request: FastifyRequest, reply: FastifyReply) => this.show(request, reply)
    );
  }

  public async create(request: any, reply: any) {
    const resp = await this.service.create(request.body);
    return reply.send(resp);
  }

  public async index(request: any, reply: any) {
    const resp = await this.service.index();
    return reply.send(resp);
    //return reply.send({ "name": "u" });
  }

  public async show(request: any, reply: any) {
    const resp = await this.service.show(request.params.id);
    if (resp === undefined || resp == null) {
      return reply.code(404).send(new Error("Item not found"));
    }
    else {
      return reply.send(resp);
    }
  }
}

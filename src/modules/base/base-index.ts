/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import BaseService from './base-service';
import BaseSchema from './base-schema';

export default class BaseIndex {
  private prefix: string;

  private fastifyInstance: any;

  private service: BaseService;

  private schema: BaseSchema;

  constructor(fastifyInstance: FastifyInstance, serviceToUse: BaseService, schema: BaseSchema) {
    this.prefix = serviceToUse.collectionName;
    this.fastifyInstance = fastifyInstance;
    this.service = serviceToUse;
    this.schema = schema;
  }

  public register(): void {
    this.fastifyInstance.post(
      this.prefix,
      { schema: this.schema.createSchema },
      async (request: FastifyRequest, reply: FastifyReply) => this.create(request, reply),
    );
    this.fastifyInstance.get(
      this.prefix,
      { schema: this.schema.getAllSchema },
      async (request: FastifyRequest, reply: FastifyReply) => this.index(request, reply),
    );
    this.fastifyInstance.get(
      `${this.prefix}/:id`,
      { schema: this.schema.getOneSchema },
      async (request: FastifyRequest, reply: FastifyReply) => this.show(request, reply),
    );
    this.fastifyInstance.delete(
      `${this.prefix}/:id`,
      { schema: this.schema.deleteSchema },
      async (request: FastifyRequest, reply: FastifyReply) => this.delete(request, reply),
    );
  }

  public async create(request: any, reply: any) {
    const resp = await this.service.create(request.body);
    return reply.send(resp);
  }

  public async index(request: any, reply: any) {
    const resp = await this.service.index();
    return reply.send(resp);
    // return reply.send({ "name": "u" });
  }

  public async show(request: any, reply: any) {
    const resp = await this.service.show(request.params.id);
    if (resp === undefined || resp == null) {
      return reply.code(404).send(new Error('Item not found'));
    }

    return reply.send(resp);
  }

  public async delete(request: any, reply: FastifyReply): Promise<{ _id: string }> {
    const resp = await this.service.delete(request.params.id);
    if (resp === undefined || resp == null) {
      return reply.code(404).send(new Error('Item not found'));
    }

    return reply.send(resp);
  }
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import BaseService from './base-service';
// import BaseSchema from './base-schema';

export default class BaseIndex {
  protected prefix: string;

  protected fastifyInstance: any;

  protected service: any;

  protected schema: any;

  constructor(
    fastifyInstance: FastifyInstance,
    serviceToUse: BaseService,
    schema: any,
    routesPrefix: string | null = null,
  ) {
    this.fastifyInstance = fastifyInstance;
    this.service = serviceToUse;
    this.schema = schema;
    this.prefix = (routesPrefix == null ? this.service.pathPrefix : routesPrefix);
    this.prefix = (this.prefix?.startsWith('/') ? this.prefix : (`/${this.prefix}`));
  }

  public register(): void {
    this.fastifyInstance.post(
      this.prefix,
      { schema: this.schema.createSchema },
      async (request: FastifyRequest, reply: FastifyReply) => this.create(request, reply),
    );
    this.fastifyInstance.put(
      `${this.prefix}/:id`,
      { schema: this.schema.updateSchema },
      async (request: FastifyRequest, reply: FastifyReply) => this.update(request, reply),
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

  public async create(request: any, reply: FastifyReply) {
    const resp = await this.service.create(request.body);
    return reply.code(201).send(resp);
  }

  public async index(request: any, reply: FastifyReply) {
    const resp = await this.service.index();
    return reply.send(resp);
  }

  public async show(request: any, reply: FastifyReply) {
    const resp = await this.service.show(request.params.id);
    if (resp === undefined || resp == null) {
      return reply.code(404).send(new Error('Item not found'));
    }

    return reply.send(resp);
  }

  public async update(request: any, reply: FastifyReply) {
    const resp = await this.service.update(request.params.id, request.body);
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

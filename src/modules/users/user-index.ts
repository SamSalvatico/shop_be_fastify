/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { FastifyRequest, FastifyReply } from 'fastify';
import BaseIndex from '../base/base-index';
import User from './user-model';

export default class UserIndex extends BaseIndex {
  public register(): void {
    super.register();
    this.fastifyInstance.post(
      `${this.prefix}/login`,
      { schema: this.schema.loginSchema },
      async (request: FastifyRequest, reply: FastifyReply) => this.login(request, reply),
    );
  }

  public async login(request: any, reply: FastifyReply): Promise<User> {
    const resp = await this.service.login(request.body);
    return reply.send(resp);
  }
}

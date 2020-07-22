/* eslint-disable new-cap */
import { FastifyInstance } from 'fastify';
import ProductCategorySchema from '../modules/product-categories/product-category-schema';
import ProductCategoryIndex from '../modules/product-categories/product-category-index';
import ProductCategory from '../modules/product-categories/product-category-model';
import ProductCategoryService from '../modules/product-categories/product-category-service';
import UserSchema from '../modules/users/user-schema';
import UserIndex from '../modules/users/user-index';
import User from '../modules/users/user-model';
import UserService from '../modules/users/user-service';
import ProductCategoryBackofficeIndex from '../modules/product-categories/product-category-backoffice-index copy';
import BaseSchema from '../modules/base/base-schema';
import BaseIndex from '../modules/base/base-index';
import BaseModel from '../modules/base/base-model';
import BaseService from '../modules/base/base-service';

export default class ServerUtils {
  static defaultPrefix = '/api/v1';

  /*
    EXAMPLE OBJECT
   {
        schema: ProductCategorySchema,
        index: ProductCategoryIndex,
        routes_path: '/product_categories',
        model: ProductCategory,
        service: ProductCategoryService,
        prefix: '/api/v2'  ### OPTIONAL, IF NOT SET GET THE DEFAULT PREFIX
      },
  */

  static routesConfigurations: Array<
  {
    schema: typeof BaseSchema;
    index: typeof BaseIndex;
    routes_path: string;
    model: typeof BaseModel;
    service: typeof BaseService;
    prefix?: string | null
  }> = [
    {
      schema: ProductCategorySchema,
      index: ProductCategoryIndex,
      routes_path: '/product_categories',
      model: ProductCategory,
      service: ProductCategoryService,
    },
    {
      schema: UserSchema,
      index: UserIndex,
      routes_path: '/users',
      model: User,
      service: UserService,
    },
    {
      schema: ProductCategorySchema,
      index: ProductCategoryBackofficeIndex,
      routes_path: '/backoffice/product_categories',
      model: ProductCategory,
      service: ProductCategoryService,
    },
  ];

  static registerRoutes(fastifyInstance: FastifyInstance): void {
    ServerUtils.routesConfigurations.forEach((element) => {
      let routesPath = (element.prefix === undefined || element.prefix == null) ? this.defaultPrefix : element.prefix;
      routesPath = routesPath.concat(element.routes_path).replace('//', '/');
      const toBeRegistered = new element.index(
        fastifyInstance,
        new element.service(element.model, fastifyInstance),
        new element.schema(),
        routesPath,
      );
      toBeRegistered.register();
    });
  }
}

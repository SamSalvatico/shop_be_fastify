/* eslint-disable new-cap */
import { FastifyInstance } from 'fastify';
import ProductCategorySchema from '../modules/product-categories/product-category-schema';
import ProductCategoryIndex from '../modules/product-categories/product-category-index';
import ProductCategory from '../modules/product-categories/product-category-model';
import ProductCategoryService from '../modules/product-categories/product-category-service';

export default class ServerUtils {
  static routesConfigurations = [
    {
      schema: ProductCategorySchema,
      index: ProductCategoryIndex,
      routes_path: '/product_categories',
      model: ProductCategory,
      service: ProductCategoryService,
    },
  ];

  static registerRoutes(fastifyInstance: FastifyInstance): void {
    ServerUtils.routesConfigurations.forEach((element) => {
      const toBeRegistered = new element.index(
        fastifyInstance,
        new element.service(element.model, fastifyInstance),
        new element.schema(),
        element.routes_path,
      );
      toBeRegistered.register();
    });
  }
}

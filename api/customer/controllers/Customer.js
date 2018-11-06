'use strict';

/**
 * Customer.js controller
 *
 * @description: A set of functions called "actions" for managing `Customer`.
 */

module.exports = {

  /**
   * Retrieve customer records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.customer.search(ctx.query);
    } else {
      return strapi.services.customer.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a customer record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.customer.fetch(ctx.params);
  },

  /**
   * Count customer records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.customer.count(ctx.query);
  },

  /**
   * Create a/an customer record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.customer.add(ctx.request.body);
  },

  /**
   * Update a/an customer record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.customer.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an customer record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.customer.remove(ctx.params);
  },

  /**
   * Add relation to a/an customer record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.customer.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an customer record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.customer.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an customer record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.customer.removeRelation(ctx.params, ctx.request.body);
  }
};

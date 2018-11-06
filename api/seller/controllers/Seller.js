'use strict';

/**
 * Seller.js controller
 *
 * @description: A set of functions called "actions" for managing `Seller`.
 */

module.exports = {

  /**
   * Retrieve seller records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.seller.search(ctx.query);
    } else {
      return strapi.services.seller.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a seller record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.seller.fetch(ctx.params);
  },

  /**
   * Count seller records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.seller.count(ctx.query);
  },

  /**
   * Create a/an seller record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.seller.add(ctx.request.body);
  },

  /**
   * Update a/an seller record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.seller.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an seller record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.seller.remove(ctx.params);
  },

  /**
   * Add relation to a/an seller record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.seller.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an seller record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.seller.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an seller record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.seller.removeRelation(ctx.params, ctx.request.body);
  }
};

'use strict';

/**
 * use-resume service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::use-resume.use-resume');

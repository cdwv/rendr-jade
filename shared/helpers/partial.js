/*
* @Author: grzegorz
* @Date:   2016-06-09 08:46:38
* @Last Modified by:   grzegorz
* @Last Modified time: 2016-06-09 08:50:14
*/

'use strict';

const getProperty = require('./getProperty');

module.exports = function(jade, getTemplate) {
    return function(templateName, options) {
      var data, html, locals, template;

      template = getTemplate(templateName);

      locals = options || {};

      locals._app = getProperty('_app', this, options);
      return template(locals);
    };
};
/*
* @Author: grzegorz
* @Date:   2016-06-09 08:50:34
* @Last Modified by:   grzegorz
* @Last Modified time: 2016-06-09 08:50:48
*/

'use strict';

/**
 * Grab important underscored properties from the current context.
 * These properties come from BaseView::decorateTemplateData().
 */
module.exports = function getOptionsFromContext(obj) {
  var options, keys, value;

  keys = [
    '_app',
    '_view',
    '_model',
    '_collection'
  ];

  options = keys.reduce(function(memo, key) {
    value = obj[key];
    if (value) {
      memo[key] = value;
    }
    return memo;
  }, {});

  return options;
}


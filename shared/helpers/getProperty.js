/*
* @Author: grzegorz
* @Date:   2016-06-09 08:46:38
* @Last Modified by:   grzegorz
* @Last Modified time: 2016-06-09 08:49:41
*/

'use strict';

/**
 * Get a property that is being passed down through helpers, such as `_app`
 * or `_view`. It can either live on the context, i.e. `this._app`, or in the
 * `options.data` object passed to the helper, i.e. `options.data._app`, in the
 * case of a block helper like `each`.
 */
module.exports = function getProperty(key, context, options) {
  return context[key] || (options.data || {})[key];
}

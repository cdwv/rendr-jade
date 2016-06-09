/*
* @Author: grzegorz
* @Date:   2016-06-09 08:46:38
* @Last Modified by:   grzegorz
* @Last Modified time: 2016-06-09 08:53:10
*/

'use strict';

const getProperty = require('./getProperty');

// Lazy-required.
var BaseView = null;

module.exports = function(jade, getTemplate) {
    return function(viewName, options) {
      var ViewClass, html, viewOptions, view;
      // it's lazy loaded, not a compile time dependency
      // hiding it from r.js compiler
      var lazyRequire_baseView = 'rendr/shared/base/view';
      // BaseView = BaseView || require(lazyRequire_baseView);
      BaseView = BaseView || require('rendr/shared/base/view');
      options = options || {};
      viewOptions = options;

      // Pass through a reference to the app.
      var app = getProperty('_app', this, options);
      if (app) {
        viewOptions.app = app;
        viewName = app.modelUtils.underscorize(viewName);
      } else{
        throw new Error("An App instance is required when rendering a view, it could not be extracted from the options.")
      }

      // Pass through a reference to the parent view.
      var parentView = getProperty('_view', this, options);
      if (parentView) {
        viewOptions.parentView = parentView;
      }

      // get the Backbone.View based on viewName
      ViewClass = BaseView.getView(viewName, app.options.entryPath);
      view = new ViewClass(viewOptions);

      // create the outerHTML using className, tagName
      return view.getHtml();
    };
};
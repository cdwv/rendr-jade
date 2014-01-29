var jade = require('jade')
module.exports = function(options) {
  var localExports = {},
      templateFinder = require('./shared/templateFinder')(jade),
      helpers = require('./shared/helpers')(jade, templateFinder);
  /**
   * helpers
   */
  localExports.helpers = jade.helpers = helpers;

  /**
   * `getTemplate` is available on both client and server.
   */
  localExports.getTemplate = templateFinder.getTemplate;

  /**
   * Expose `templatePatterns` for manipulating how `getTemplate` finds templates.
   */
  localExports.templatePatterns = templateFinder.templatePatterns;

  /**
   * The default pattern `/.+/` is very greedy; it matches anything, including nested paths.
   * To add rules that should match before this default rule, `unshift` them from this array.
   */
  localExports.templatePatterns.push({ pattern: /.+/,
                                       src: options.entryPath + 'app/templates/compiledTemplates' })
  /**
   * `getLayout` should only be used on the server.
   */
  if (typeof window === 'undefined') {
    localExports.getLayout = require('./server/layoutFinder')(jade).getLayout;
  } else {
    localExports.getLayout = function() {
      throw new Error('getLayout is only available on the server.');
    };
  }

  return localExports;
}


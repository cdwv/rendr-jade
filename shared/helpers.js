
// Lazy-required.
var BaseView = null;

module.exports = function(jade, getTemplate) {

  return {
    view: require('./helpers/view')(jade,getTemplate),
    partial: require('./helpers/partial')(jade, getTemplate),
    json: require('./helpers/json')(jade, getTemplate)
  };
};


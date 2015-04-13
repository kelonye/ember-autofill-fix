require('ember');

// wait for autofill to happen

var wait = 5; // ms

// view mixin

module.exports = Em.Mixin.create({

  loadVal: function(){

    var el = this.$()[0];
    var id = setTimeout(function(){
      clearTimeout(id);
      if (!el) return;
      var view = Ember.View.views[el.id];
      if (view) view.set('value', el.value);
    }, wait);

  }.on('didInsertElement'),

});
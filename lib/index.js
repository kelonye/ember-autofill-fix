require('ember');

// wait for autofill to happen

var wait = 5; // ms

// view mixin

module.exports = Em.Mixin.create({

  didInsertElement: function(){
    
    if (this._super instanceof Function){
      this._super();
    }

    Em.$('input')
      .each(function(i, el){
        var input = $(el);
        var id = setTimeout(function(){
          clearTimeout(id);
          var val = input.val();
          var id = input.attr('id');
          var view = Ember.View.views[id];
          view.set('value', val);
        }, wait);
      });

  }

});
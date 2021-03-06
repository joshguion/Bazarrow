var Backbone = require('backbone');
var GoodsModel = require('./goodsModel');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'section',
  className: '',
  template: _.template(tmpl.goods),
  events: {
    // 'click .delete': 'deleteItem',
    // 'click .edit': 'edit',
    // 'submit .editted': 'editItem'
  },
  initialize: function () {

  },
 //  deleteItem : function() {
 //   this.model.destroy();
 //   this.remove();
 // },
 // edit: function(e){
 //    e.preventDefault();
 //    this.$('.editted').toggleClass('hidden');
 //  },
 // editItem: function(event){
 //   event.preventDefault();
 //   var editText = this.model;
 //   editText.set({
 //     image: this.$el.find('input[name="item_image"]').val(),
 //     title: this.$el.find('input[name="title"]').val(),
 //     description: this.$el.find('input[name="description"]').val(),
 //     available: this.$el.find('input[name="available"]').val(),
 //   });
 //   $('.editted').addClass('hidden');
 //    editText.save();
 //    this.render();
 //  },
  render: function () {
    console.log(this.model);
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
});

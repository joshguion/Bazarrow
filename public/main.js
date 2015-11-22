var $ = require('jquery');
var Backbone = require('backbone');
var LayoutView = require('./layoutView');
var Router = require('./router');

$( ".l-signUpBtn" ).on( "click", function() {
  $('.signUpDiv').removeClass('hide');
  $('.loginDiv').addClass('hide');
});

$( ".s-loginBtn" ).on( "click", function() {
  $('.signUpDiv').addClass('hide');
  $('.loginDiv').removeClass('hide');
});

$( ".profileAddItem" ).on( "click", function() {
  $('.myItemsBtn').toggleClass('hide');
  $('.addItemMenu').toggleClass('hide');
});

$( ".marketAddItem" ).on( "click", function() {
  $('.addMarketItemForm').toggleClass('hide');
});

$( ".marketBtn" ).on( "click", function() {
  $('.profilePage').addClass('hide');
  $('#market').removeClass('hide');
});

$( ".homeBtn" ).on( "click", function() {
  $('.profilePage').removeClass('hide');
  $('#market').addClass('hide');
});

var LayoutView = require('./layoutView');

$(function () {
 new LayoutView();
});

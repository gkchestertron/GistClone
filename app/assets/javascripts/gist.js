window.Gist = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		new Gist.Router.Router();
		Backbone.history.start();
  }
};

$(document).ready(function(){
  Gist.initialize();
});

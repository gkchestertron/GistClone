window.Gist = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		Gist.Collections.gists = new Gist.Collections.Gists();
		Gist.Collections.gists.fetch({
			success: function () {
				new Gist.Routers.Router({$el: $("#content")});
				Backbone.history.start();
			}
		});
  }
};

$(document).ready(function(){
  Gist.initialize();
});

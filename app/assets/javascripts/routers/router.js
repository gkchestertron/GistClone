Gist.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$el = options.$el;
	},

	routes: {
		'':'gistIndex',
		'gists/:id': 'gistShow'
	},

	gistShow: function (id) {
		var model = Gist.Collections.gists.get(id);
		var view = new Gist.Views.Gist({ model: model });
		this._swapView(view);
	},

	gistIndex: function () {
		var collection = Gist.Collections.gists;
		var view = new Gist.Views.Gists({ collection: collection });
		this._swapView(view)
	},

	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$el.html(view.render());
	}
});
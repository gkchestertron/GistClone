Gist.Views.Gists = Backbone.View.extend({
	render: function () {
		var that = this;
		var content = this.template();
		this.$el.html(content);
		this.collection.each(function (model) {
			var subview = new Gist.Views.GistDetail({model: model});
			that.$el.find('ul').append(subview.render());
		});
		return this.$el;
	},
	template: JST['gists/gists']
});
Gist.Views.Gists = Backbone.View.extend({
	render: function () {
		var content = this.template({gists: this.collection});
		this.$el.html(content);
		return this;
	},
	template: JST['gists/gists']
});
Gist.Views.Gist = Backbone.View.extend({
	render: function () {
		var content = this.template({
			gist: this.model
		})
		this.$el.html(content);
		return this.$el;
	},
	template: JST['gists/gist']

})
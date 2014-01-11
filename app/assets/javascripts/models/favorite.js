Gist.Models.Favorite = Backbone.Model.extend({
	initialize: function (options) {
		this.gist_id = options.gist_id;
	},
	url: function () {
		return "/gists/" + this.get('gist_id') + "/favorite"
	}
});
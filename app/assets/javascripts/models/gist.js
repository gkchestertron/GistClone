Gist.Models.Gist = Backbone.Model.extend({
	urlRoot: '/gists',

	parse: function (data) {
		var favorited = data.favorited;
		console.log(favorited);
		if (favorited) {
			data.favorited = new Gist.Models.Favorite(favorited, { gist_id: this.id });
		}
		return data;
	},

	toJSON: function () {
		var data = _.clone(this.attributes);
		delete data.favorited;
	}
})
Gist.Views.GistDetail = Backbone.View.extend({
	initialize: function (){
		this.listenTo(this.model, "change", this.render)
	},

	events: {
		"click button.favorite": "favoriteModel",
		"click button.unfavorite": "unfavoriteModel"
	},

	tagName: "li",

	render: function () {
		var content = this.template({ gist: this.model });
		this.$el.html(content);
		return this.$el;
	},

	template: JST['gists/gist_detail'],

	favoriteModel: function (event) {
		var fav = new Gist.Models.Favorite({gist_id: this.model.id});
		fav.save();
		this.model.fetch();
	},

	unfavoriteModel: function (event){
		var unfav = this.model.get('favorited');
		unfav.destroy();
		this.model.fetch();
	}
});
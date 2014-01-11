Gist.Collections.Gists = Backbone.Collection.extend({
	url: '/gists',
	model: Gist.Models.Gist
})
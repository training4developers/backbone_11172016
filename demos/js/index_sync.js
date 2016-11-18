const Widget = Backbone.Model.extend({
	idAttribute: "_id",
	urlRoot: 'https://t4dclass.herokuapp.com/api/widgets'
});

const Widgets = Backbone.Collection.extend({
	model: Widget,
	url: 'https://t4dclass.herokuapp.com/api/widgets'
});

const widgets = new Widgets();

widgets.fetch({
	success: function() {
		console.dir(widgets.find(widget => widget.id === '56d9b0eea0de9a03004997c8'));
	}
})
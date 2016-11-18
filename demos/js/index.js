'use strict';

const ListItem = Backbone.View.extend({
	tagName: 'li',
	render() {
		this.$el.text(this.model);
		return this;
	}
});

const ListView = Backbone.View.extend({
	tagName: 'ul',
	render: function() {
		this.$el.empty();
		this.collection.toJSON().forEach(color => {
			const li = new ListItem({ model: color.name })
			this.$el.append(li.render().$el);
		});
		return this;
	}
});

const DemoView = Backbone.View.extend({
	tagName: 'div',
	events: {
		'click [data-action-add-color]': 'addColor'
	},
	addColor: function() {

		const newColorInput = $('#new-color');

		const newColor = new Backbone.Model({
			name: newColorInput.val()
		});

		this.collection.add(newColor);

		newColorInput.val('');
	},

	initialize: function() {

	},

	// template: _.template(`
	// 	<form>
	// 		<label>New Color:</label>
	// 		<input type="text" id="new-color" name="new-color" value="">
	// 		<button type="button" data-action-add-color>Add Color</button>
	// 	</form>
	// `),

	template: Handlebars.compile(`
		<form>
			<label>{{newColorLabel}}:</label>
			<input type="text" id="new-color" name="new-color" value="">
			<button type="button" data-action-add-color>Add Color</button>
		</form>
	`),

	render: function() {

		//this.$el.empty();
		
		const listView = new ListView({ collection: this.collection });

		// this.collection.on('add', () => {
		// 	const updatedListView = new ListView({ collection: this.collection.toJSON() });
		// 	this.$el.find('ul').replaceWith(updatedListView.render().$el);
		// });

		listView.listenTo(this.collection, 'update', () => {
			console.log('collection updated');
			listView.render();
		});

		this.$el.append(listView.render().$el);
		this.$el.append(this.template({ newColorLabel: 'Nuevo Color' }));

		return this;
	}
});

const colors = new Backbone.Collection();
colors.add(new Backbone.Model({ name: 'red' }));
colors.add(new Backbone.Model({ name: 'blue' }));
colors.add(new Backbone.Model({ name: 'white' }));
colors.add(new Backbone.Model({ name: 'orange' }));

const demoView = new DemoView({ collection: colors });
$("main").append(demoView.render().$el);

// demoView.remove();

// demoView.delegateEvents();
// demoView.undelegateEvents();
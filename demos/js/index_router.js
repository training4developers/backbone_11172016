

const AppRouter = Backbone.Router.extend({

	routes: {
		'contact': 'contact',
		'about': 'about',
		'': 'home'

	},

	home: function() {
		console.log('home route');
	},

	about: function() {
		console.log('about route');
	},

	contact: function() {
		console.log('contact route');
	}

});

const appRouter = new AppRouter();	

Backbone.history.start({ pushState: false });

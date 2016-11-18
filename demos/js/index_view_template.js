'use strict';

const DemoView = Backbone.View.extend({

	tagName: 'div',
	id: 'my-first-view',
	className: 'critical sidebar canada',

	render() {

		// const compiledTemplate = _.template(`
		// 	<div>Name: <%- name %></div>
		// 	<div>Size: <%- size %></div>
		// `);

		// const html = compiledTemplate(this.model.attributes);

		// console.log(html);

		const html = `<div>Name: ${this.model.demoModel.get('name')}</div>
			<div>Size: ${this.model.demoModel.get('size')}</div>`;

		this.$el.append(html);

		//this.$el.append('<div>Name:' + this.model.get('name') +'</div>');
		//this.$el.append('<div>Size:' + this.model.get('size') +'</div>');




	}
});

const demoModel = new Backbone.Model({
	name: 'Demo',
	size: 'large'
});

const demoView = new DemoView({
	model: {demoModel: demoModel, anotherModel: demoModel }
});
const mainElement = document.querySelector('main');

demoView.render();
//mainElement.appendChild(demoView.el);
document.querySelector('main').appendChild(demoView.el);
$(mainElement).append(demoView.el);
$(mainElement).append(demoView.$el);
$("main").append(demoView.$el);


console.dir(demoView.el);
console.dir(demoView.$el);

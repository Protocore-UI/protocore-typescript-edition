import * as signals from "signals";
import * as hasher from "hasher";
import * as crossroads from "crossroads";

import HomeView from '../views/homeView';
import HomeTemplate from '../templates/homeTpl.handlebars';

import AboutView from '../views/aboutView';
import AboutTemplate from '../templates/aboutTpl.handlebars';

let router = crossroads.create();

let parseHash = (newHash: any) => {
	router.parse(newHash);
};

router.addRoute('', () => {
	console.log("Home View");
	new HomeView({
		template: HomeTemplate
	});
});

router.addRoute('/about', () => {
	console.log("About Us View");
	new AboutView({
		template: AboutTemplate
	});
});

hasher.initialized.add(parseHash);
hasher.changed.add(parseHash);
hasher.init();

import * as signals from "signals";
import * as hasher from "hasher";
import * as crossroads from "crossroads";

declare function require(module: string): any;

import HomeView from '../views/homeView';
let HomeTemplate = require('../templates/homeTpl.handlebars');

import AboutView from '../views/aboutView';
let AboutTemplate = require('../templates/aboutTpl.handlebars');

let router = crossroads.create();

let parseHash = (newHash: any) => {
	router.parse(newHash);
};

router.addRoute('', () => {
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

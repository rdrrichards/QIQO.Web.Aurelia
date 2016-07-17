import 'bootstrap';

export function configure(aurelia) {
    aurelia.use.instance('apiRoot', 'http://localhost:49847/api/');
	aurelia.use.standardConfiguration().developmentLogging();
	aurelia.start().then(a=>a.setRoot("shell"));
}
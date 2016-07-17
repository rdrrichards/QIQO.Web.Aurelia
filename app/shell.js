export class Shell {
    constructor(){
        this.message = "Cheesecake sucks!!";
    }
    
    configureRouter(config, router) {
		this.router = router;
		config.title = "The Cheesecake Fool";
		//config.addPipelineStep('modelbind', ToastNavResult);
		//config.options.pushState = true;
		config.map([
				{ route: ['', 'openorders'], viewPorts: { mainContent1: {moduleId: 'orders/open.orders'}, mainContent2: {moduleId: 'invoices/open.invoices'}} , 
					name: 'Open Orders', title: 'Open Orders', nav: true },
				{route: 'accounts', viewPorts: { mainContent1: {moduleId: 'accounts/account.find'}, mainContent2: {moduleId: 'accounts/account.recent'}} , 
					name: 'Accounts', title: 'Accounts', nav: true },
				{ route: 'orders', name: 'Orders', viewPorts: { mainContent1: {moduleId: 'orders/order.find'}, mainContent2: {moduleId: 'orders/order.recent'}},  
					title: 'Orders', nav: true },
				{ route: 'invoices', name: 'Invoices', viewPorts: { mainContent1: {moduleId: 'invoices/invoice.find'}, mainContent2: {moduleId: 'invoices/invoice.recent'}},  
					title: 'Invoices', nav: true },
				{ route: 'products', viewPorts: { mainContent1: {moduleId: 'products/product.find'}, mainContent2: {moduleId: 'products/product.recent'}} , 
					title: 'Products', nav:true },
				{ route: 'orders/:id', viewPorts: { mainContent1: { moduleId: 'orders/order.view'}, mainContent2: {moduleId: 'orders/order.recent'}} , name: 'OrderView'},
				{ route: 'products/:id', viewPorts: { mainContent1: { moduleId: 'products/product.view'}, 
													  mainContent2: {moduleId: 'products/product.recent'}} , name: 'ProductView'},
				{ route: 'products/edit/:id', viewPorts: { mainContent1: { moduleId: 'products/product.edit'}, 
														   mainContent2: {moduleId: 'products/product.recent'}} , name: 'ProductEdit'},
				{ route: 'accounts/:id', viewPorts: { mainContent1: { moduleId: 'accounts/account.view'}, 
													  mainContent2: {moduleId: 'accounts/account.recent'}} , name: 'AccountView'},
		]);
	}
}
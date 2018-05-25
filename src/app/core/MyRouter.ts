import { Context, Router, View, ConboEvent, encodeEntities } from 'conbo';
import View1 from '../view/View1';
import View2 from '../view/View2';


export default class MyRouter extends Router
{
	container: View;
	context: Context;
	currentView:View;

	declarations(options:any)
	{
		this.context = options.context;
		this.container = this.context.app;

		this.context.namespace['View1'] = View1;
		this.context.namespace['View2'] = View2;

		// Route:Name pairs
		this.routes =
		{
			'/':'',
			'View1':'View1',
			'View2':'View2',
		};
	}

	protected initialize()
	{
		this
			.addEventListener(ConboEvent.FAULT, this.faultHandler, this) // Unrecognised route
			.addEventListener(ConboEvent.ROUTE, this.routeHandler, this) // Recognised route
			.start();

	}

	protected routeHandler(event: ConboEvent): any {
		/* For automatic adding and removing */

		if(!!this.currentView) {
			this.currentView.remove();
		}
		if(this.context) console.log('this.context.namespace[event.name]', this.context.namespace[event.name]);
		if(this.context && this.context.namespace[event.name]) {
			this.currentView = new this.context.namespace[event.name](this.context);
		} else {
			this.currentView = null;
		}

		if(!!this.currentView && this.container.body) this.container.appendView(this.currentView);
	}
	protected faultHandler(arg0: any, arg1: any, arg2: any): any {
		console.warn('faultHandler Method not implemented.');
	}
}

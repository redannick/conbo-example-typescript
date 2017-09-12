import * as conbo from 'conbo';
import { conbons } from 'conbo';
import MyContext from './core/MyContext';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

@conbons('com.example.typescript')
export default class TypeScriptExample extends conbo.Application 
{
	declarations():void
	{
		this.namespace = conbo('com.example.typescript');
		this.contextClass = MyContext;
	}

	initialize():void
	{
		console.info('Hello from ConboJS via TypeScript!');

		this.appendView
		(
			new OutputView(this.context.addTo()),
			new InputView(this.context.addTo())
		);
	}

}

import * as conbo from 'conbo';
import MyContext from './core/MyContext';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

const ns = conbo('com.example.typescript');

class TypeScriptExample extends conbo.Application 
{
	declarations():void
	{
		this.namespace = ns;
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

ns.import({ TypeScriptExample });

import * as conbo from 'conbo';
import MyContext from './core/MyContext';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

@conbo.conbons('com.example.typescript', 'TypeScriptExample')
export default class TypeScriptExample extends conbo.Application 
{
	protected declarations():void
	{
		this.namespace = conbo('com.example.typescript');
		this.contextClass = MyContext;
	}

	protected initialize():void
	{
		console.info('Hello from ConboJS via TypeScript & Webpack!');

		this.appendView
		(
			new OutputView(this.context),
			new InputView(this.context)
		);
	}

}

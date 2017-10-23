import * as conbo from 'conbo';
import MyContext from './core/MyContext';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

import '../sass/TypeScriptExample.scss';

@conbo.conbons('conbo.example.typescript', 'TypeScriptExample')
export default class TypeScriptExample extends conbo.Application 
{
	protected declarations():void
	{
		this.namespace = conbo('conbo.example.typescript');
		this.contextClass = MyContext;
	}

	protected initialize():void
	{
		console.info('Hello from ConboJS using TypeScript, SASS & Webpack!');

		this.appendView
		(
			new OutputView(this.context),
			new InputView(this.context)
		);
	}

}

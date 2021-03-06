import './TypeScriptExample.scss';

import * as conbo from 'conbo';
import { Application, Viewable } from 'conbo';

import MyContext from './core/MyContext';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

@Viewable('conbo.example.typescript', 'TypeScriptExample')
export default class TypeScriptExample extends Application
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

import { View, Viewable } from 'conbo';

import MyModel from '../model/MyModel';

@Viewable('conbo.example.typescript', 'OutputView')
export default class OutputView extends View
{
	public myModel:MyModel;

	protected declarations()
	{
		// Automatically injected
		this.myModel = undefined;

		this.tagName = 'h1';
		this.template = `Hello, {{myModel.name|parseName}}!`;
	}

	public parseName(name:string):string
	{
		return name || 'Stranger';
	}
}

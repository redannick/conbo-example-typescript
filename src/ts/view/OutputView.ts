import * as conbo from 'conbo';
import MyModel from "../model/MyModel";

@conbo.conbons('com.example.typescript', 'OutputView')
export default class OutputView extends conbo.View
{
	public myModel:MyModel;

	protected declarations()
	{
		// Automatically injected
		this.myModel = undefined;

		this.tagName = 'h1';
		this.template = `Hello {{myModel.name|parseName}}!`;
	}

	public parseName(name:string):string
	{
		return name || 'Stranger';
	}
}

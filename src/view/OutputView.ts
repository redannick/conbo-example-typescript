import * as conbo from 'conbo';
import MyModel from "../model/MyModel";

export default class OutputView extends conbo.View
{
	public myModel:MyModel;

	declarations()
	{
		// Automatically injected
		this.myModel = undefined;

		this.tagName = 'h1';
		this.template = `<Hello <span cb-bind="myModel.name" />!`;
	}
}

import * as conbo from 'conbo';
import { conbons } from 'conbo';
import MyModel from "../model/MyModel";

@conbons('com.example.typescript')
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

import * as conbo from 'conbo';
import { conbons } from 'conbo';
import MyModel from "../model/MyModel";

@conbons('com.example.typescript')
export default class InputView extends conbo.View
{
	public myModel:MyModel;

	declarations()
	{
		// Automatically injected
		this.myModel = undefined;
		
		this.tagName = 'p';
		this.template = `My name is <input type="text" cb-bind="myModel.name" />`;	
	}
}

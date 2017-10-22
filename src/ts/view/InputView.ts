import * as conbo from 'conbo';
import MyModel from "../model/MyModel";

@conbo.conbons('com.example.typescript', 'InputView')
export default class InputView extends conbo.View
{
	@conbo.injectable public myModel:MyModel;

	protected declarations()
	{
		this.tagName = 'p';
		this.template = `My name is <input type="text" cb-bind="myModel.name" />`;
	}
}

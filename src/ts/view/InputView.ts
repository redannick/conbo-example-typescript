import MyModel from '../model/MyModel';
import { Viewable, View, Injectable } from 'conbo';

@Viewable('conbo.example.typescript', 'InputView')
export default class InputView extends View
{
	@Injectable public myModel:MyModel;

	protected declarations()
	{
		this.tagName = 'p';
		this.template = `My name is <input type="text" placeholder="Name" cb-bind="myModel.name" />`;
	}
}

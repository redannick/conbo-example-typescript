import MyModel from '../model/MyModel';
import { Viewable, View, Inject } from 'conbo';

@Viewable('conbo.example.typescript', 'InputView')
export default class InputView extends View
{
	@Inject public myModel:MyModel;

	protected declarations()
	{
		this.tagName = 'p';
		this.template = `My name is <input type="text" placeholder="Name" cb-bind="myModel.name" />
		<a href="./#!View1">view 1</a>
		<a href="./#!View2">view 2</a>
		`;
	}
}

import MyModel from '../model/MyModel';
import { Viewable, View, Inject } from 'conbo';

@Viewable('conbo.example.typescript', 'View2')
export default class View2 extends View
{
	@Inject public myModel:MyModel;

	protected declarations()
	{
		this.tagName = 'p';
		this.template = `View 2`;
	}
}

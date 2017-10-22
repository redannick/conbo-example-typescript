import * as conbo from 'conbo';
import MyModel from '../model/MyModel';

export default class MyContext extends conbo.Context
{
	initialize()
	{
		this.mapSingleton('myModel', MyModel);
	}
}

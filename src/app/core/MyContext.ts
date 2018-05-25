import { Context } from 'conbo';

import MyModel from '../model/MyModel';
import MyRouter from './MyRouter';

export default class MyContext extends Context
{
	protected initialize()
	{
		this.mapSingleton('myModel', MyModel);
		this.mapSingleton('myRouter', MyRouter, {context:this});
	}
}

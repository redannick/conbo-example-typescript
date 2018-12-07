import { Hash } from 'conbo';
import IRegion from './IRegion';

export default class MyModel extends Hash
{
	public name:string = 'Conbo';
	_regions: any;
	declarations() {
		// this._regions = new IRegion();
	}
	public get regionList ():Array<string>{
		let list:Array<string> = this._regions.map((region:IRegion)=>region.name);
		return list;
	}
}

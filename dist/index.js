import {ObjectInBrowserStorage} from '@writetome51/object-in-browser-storage';


export class ObjectInLocalStorage extends ObjectInBrowserStorage {

	constructor(
		key = '',
		value = undefined
	) {
		super(localStorage, key, value);
	}

}

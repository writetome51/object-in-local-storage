import { ObjectInBrowserStorage } from '@writetome51/object-in-browser-storage';


export class ObjectInLocalStorage extends ObjectInBrowserStorage {

	constructor(
		key = '',
		value: Object | any[] = undefined
	) {
		super(localStorage, key, value);
	}

}

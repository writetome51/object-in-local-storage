# ObjectInLocalStorage

A TypeScript/JavaScript class representing an object or array stored in the  
browser's `localStorage`. The item is identified by a unique string `this.key`  
and stored as a `key:value` pair.   
When you call the constructor, if the `key` argument is a string that isn't  
empty and the `value` argument is not undefined or null, the item will be  
stored immediately. Else, the item won't be stored until you call  
`this.set(value)`.

Note: this only works when run in a browser environment.


## Constructor

<details>
<summary>view constructor</summary>

```ts
constructor(
    key? = '',
        // assigned to this.key

    value?: Object | any[]  = undefined
)
    // If `key` is not an empty string and `value` is defined, the item 
    // is stored immediately.
```
</details>


## Properties
<details>
<summary>view properties</summary>

```ts
key: string // the unique ID for the stored object or array.
    
className: string // read-only
```
</details>


## Methods
<details>
<summary>view methods</summary>

```ts
set(value: Object | any[]): void
    // Saves item `value` in storage.  Replaces previous value, if any.

get(): Object | any[]
    // Returns the stored object or array.

getAsJSON(): string
    // Returns stored object or array as JSON.

modify(changes: Object | any[]): void
    // `changes` does not replace the current value.  It is merged into the current value.

remove(): void
    // After calling this, both the key and value are no longer in
    // storage.  You can store the item again by calling this.set(value)
```
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```ts
protected   _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	   ) : void
    /*********************
    Use this method when you have a bunch of properties that need getter and/or 
    setter functions that all do the same thing. You pass in an array of string 
    names of those properties, and the method attaches the same getter and/or 
    setter function to each property.
    IGetterSetterConfiguration is this object:
    {
        get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function,
	    // get_setterFunction takes the property name as first argument and 
	    // returns the setter function.  The setter function must take one 
	    // parameter and return void.
	    
        get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function
	    // get_getterFunction takes the property name as first argument and 
	    // returns the getter function.  The getter function must return something.
    }
    *********************/ 
	   
	   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.


protected   _errorIfPropertyHasNoValue(
                property: string, // can contain dot-notation, i.e., 'property.subproperty'
                propertyNameInError? = ''
            ) : void
    // If value of this[property] is undefined or null, it triggers fatal error:
    // `The property "${propertyNameInError}" has no value.`
```
</details>


## Usage Example
<details>
<summary>view example</summary>

```ts
// It might be a good idea to name each class instance after its key.
// After instantiation, you wouldn't modify its `key` property.

let user1 = new ObjectInLocalStorage(
    'user1',
    {username: 'papasmurf', password: 'i_love_smurfette'}
);

let user2 = new ObjectInLocalStorage(
    'user2',
    {username: 'smurfette', password: 'i_love_papa'}
);

// Or, you could create a singleton instance to handle all stored objects,
// and change its `key` when you want to change what specific object to handle.

let objInLocalStorage = new ObjectInLocalStorage();
objInLocalStorage.key = 'user1';
objInLocalStorage.set({username: 'papasmurf', password: 'i_love_smurfette'});

objInLocalStorage.key = 'user2';
objInLocalStorage.set({username: 'smurfette', password: 'i_love_papa'});
```
</details>


## Inheritance Chain

ObjectInLocalStorage<--[ObjectInBrowserStorage](https://github.com/writetome51/object-in-browser-storage#objectinbrowserstorage)<--[ItemInBrowserStorage](https://github.com/writetome51/item-in-browser-storage#iteminbrowserstorage)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## Installation

```bash
npm i  @writetome51/object-in-local-storage
```

## Loading
```ts
// If using TypeScript:
import {ObjectInLocalStorage} from '@writetome51/object-in-local-storage';
// If using ES5 JavaScript:
var ObjectInLocalStorage = 
    require('@writetome51/object-in-local-storage').ObjectInLocalStorage;
```

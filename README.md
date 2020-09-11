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
    key? = '',  // assigned to this.key

    value?: Object | any[]  = undefined
)
    // If `key` is not an empty string and `value` is defined, the item 
    // is stored immediately.
```
</details>


## Properties
<details>
<summary>view properties</summary>

```js
key: string // the unique ID for the stored object or array.
```
</details>


## Methods
<details>
<summary>view methods</summary>

```js
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

ObjectInLocalStorage <--
[ObjectInBrowserStorage](https://github.com/writetome51/object-in-browser-storage#objectinbrowserstorage)
<--[ItemInBrowserStorage](https://github.com/writetome51/item-in-browser-storage#iteminbrowserstorage)



## Installation

```bash
npm i  @writetome51/object-in-local-storage
```

## Loading
```js
import {ObjectInLocalStorage} from '@writetome51/object-in-local-storage';
```

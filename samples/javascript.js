const person = "Nick";
person = "John"; // Will raise an error, person can't be reassigned

let person = "Nick";
person = "John";
console.log(person); // "John", reassignment is allowed with let

function myFunction() {
	var myVar = "Nick";
	console.log(myVar); // "Nick" - myVar is accessible inside the function
}
console.log(myVar); // Throws a ReferenceError, myVar is not accessible outside the function.

function myFunc() {
	this.myVar = 0;
	setTimeout(() => {
		this.myVar++;
		console.log(this.myVar); // 1
	}, 0);
}

const person = {
	firstName: "Nick",
	lastName: "Anderson",
	age: 35,
	sex: "M",
};

function joinFirstLastName({ firstName, lastName }) {
	// we create firstName and lastName variables by destructuring person parameter
	return firstName + "-" + lastName;
}

joinFirstLastName(person); // "Nick-Anderson"

// mathConstants.js
export const pi = 3.14;
export const exp = 2.7;
export const alpha = 0.35;

// -------------

// myFile.js
import { pi, exp } from "./mathConstants.js"; // Named import -- destructuring-like syntax
console.log(pi); // 3.14
console.log(exp); // 2.7

// -------------

// mySecondFile.js
import * as constants from "./mathConstants.js"; // Inject all exported values into constants variable
console.log(constants.pi); // 3.14
console.log(constants.exp); // 2.7

class Polygon {
	constructor(height, width) {
		this.name = "Polygon";
		this.height = height;
		this.width = width;
	}

	getHelloPhrase() {
		return `Hi, I am a ${this.name}`;
	}
}

class Square extends Polygon {
	constructor(length) {
		// Here, it calls the parent class' constructor with lengths
		// provided for the Polygon's width and height
		super(length, length);
		// Note: In derived classes, super() must be called before you
		// can use 'this'. Leaving this out will cause a reference error.
		this.name = "Square";
		this.length = length;
	}

	getCustomHelloPhrase() {
		const polygonPhrase = super.getHelloPhrase(); // accessing parent method with super.X() syntax
		return `${polygonPhrase} with a length of ${this.length}`;
	}

	get area() {
		return this.height * this.width;
	}
}

const mySquare = new Square(10);
console.log(mySquare.area); // 100
console.log(mySquare.getHelloPhrase()); // 'Hi, I am a Square' -- Square inherits from Polygon and has access to its methods
console.log(mySquare.getCustomHelloPhrase()); // 'Hi, I am a Square with a length of 10'

async function getUser() { // The returned promise will be rejected!
    throw "User not found !";
  }
  
  async function getAvatarByUsername((userId) => {
    const user = await getUser(userId);
    return user.avatar;
  }
  
  async function getUserAvatar(username) {
    var avatar = await getAvatarByUsername(username);
    return { username, avatar };
  }
  
  getUserAvatar('mbeaudru')
    .then(res => console.log(res))
    .catch(err => console.log(err)); // "User not found !"

    // Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });
// Because the added object has no other references, it will not be held in the set

// app.js
import * as proxy from 'lib/proxy';
var target = {};
var origin = proxy.create(target);
origin.a = 37; // operation forwarded to the target
alert('target.a = ' + target.a); // The operation has been properly forwarded

var MyConstructor = function(){
    // public variables are declared using this
    this.myNumber = 5;
    // private variables are declared using var
    var secretNum = 4;
    // public getter for the private variable
    this.getSecret = function(){ return secretNum };
}
myNewObj = new MyConstructor(); // = {myNumber: 5, secretNum: 4}
myNewObj.myNumber; // = 5
myNewObj.secretNum; // undefined
myNewObj.getSecret(); // = 4
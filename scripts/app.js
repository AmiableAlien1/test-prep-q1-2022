//@ts-check
// Decalare a variable called "name" and assign your first name to it.
let variable;
variable = "Peter";

// Log the variable you just created out to the console

console.log("Peter");

// change the following code so that "watermelon" is written to the console

let watermelon = "";
console.log("watermelon", watermelon);

// Change the following code so the array is filtered to your
// favorite fruit.  Feel free to add to the fruits array
// if your favorite isn't in there.
let fruits = ["grape", "apple", "kiwi", "strawberry"];
fruits = fruits.filter((f) => f === "apple");
console.log(fruits);

let x = 34;
let y = 68;

class Player {
	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {string} color
	 */
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
	}

	update() {
		this.x = this.x + 1;
		this.y + this.y + 1;
	}

	display() {
		console.log(this.x, this.y, "blue");
	}
}

fruits = fruits.filter((f) => f === "");
console.log("The array of fruits now equals: ", fruits);

// Create a new class called Player. Have the Player class
// take in x and y coordinates as input parameters to it's
// constructor.  Setup a property on the class named color,
// and initialize the color property to a string value (you
// can use a basic color or HSL string, your choice).
//

let santa = new Player(x, y, "blue");
santa.update();
santa.display();

// Create a method on the class named update.  When update
// is called, increment the x and y coordinates by 1.
//
// Create a display method.  When display is called, log the
// x, y and color properties to the console.

// declare a variable and set it to a new instance of Player

// call the update method at least once

// call the display method at least once

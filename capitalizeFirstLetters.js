// capitalizeFirstLetters.js
const assert = require("assert");

function capitalizeFirstLetters(str) {
	return str
		.split(" ")
		.map((item) => item.substring(0, 1).toUpperCase() + item.substring(1))
		.join(" ");
}

// Est bien une fonction qui accepte un argument
assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Transforme correctement en javaScript
assert.strictEqual(capitalizeFirstLetters("javaScript"), "JavaScript");

// Fonctionne avec 1 caractère
assert.strictEqual(capitalizeFirstLetters("z"), "Z");

// "Fonctionne avec plusieurs mots
assert.strictEqual(capitalizeFirstLetters("plusieurs mots"), "Plusieurs Mots");

// Fonctionne avec un chaîne vide
assert.strictEqual(capitalizeFirstLetters(""), "");

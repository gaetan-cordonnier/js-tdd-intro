// test/capitalizeFirstLetters.test.js
const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {
	it("Est bien une fonction qui accepte un argument", () => {
		assert.strictEqual(typeof capitalizeFirstLetters, "function");
		assert.strictEqual(capitalizeFirstLetters.length, 1);
	});

	it("Transforme correctement en javaScript", () => {
		assert.strictEqual(capitalizeFirstLetters("javaScript"), "JavaScript");
	});

	it("Fonctionne avec 1 caractère", () => {
		assert.strictEqual(capitalizeFirstLetters("z"), "Z");
	});

	it("Fonctionne avec plusieurs mots", () => {
		assert.strictEqual(
			capitalizeFirstLetters("plusieurs mots"),
			"Plusieurs Mots"
		);
	});

	it("Fonctionne avec un chaîne vide", () => {
		assert.strictEqual(capitalizeFirstLetters(""), "");
	});
});

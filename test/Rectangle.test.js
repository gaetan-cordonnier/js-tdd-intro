// Rectangle.test.js
const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
	it("Vérifie si c'est bien un rectangle", () => {
		const rectangle = new Rectangle(13, 7);
		assert.strictEqual(rectangle.isSquare(), false);

		const square = new Rectangle(13, 13);
		assert.strictEqual(square.isSquare(), true);
	});

	it("Calcule la superficie du rectangle", () => {
		const area = new Rectangle(13, 7);
		assert.strictEqual(area.getArea(), 91);
	});

	it("Calcule le périmètre du rectangle", () => {
		const perimeter = new Rectangle(13, 7);
		assert.strictEqual(perimeter.getPerimeter(), 40);
	});
});

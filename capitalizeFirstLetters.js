// capitalizeFirstLetters.js

function capitalizeFirstLetters(str) {
	return str
		.split(" ")
		.map((item) => item.substring(0, 1).toUpperCase() + item.substring(1))
		.join(" ");
}

module.exports = capitalizeFirstLetters;

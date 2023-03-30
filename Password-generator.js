var generatePassword = require('generate-password');

var password = generatePassword.generate({
	length: 10,
	numbers: true,
	symbols: true,
});
console.log(password);
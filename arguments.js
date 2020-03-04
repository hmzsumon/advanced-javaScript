function add(num1, num2) {
	return num1 + num2 + arguments[2];
}
const result = add(2, 3, 5);
console.log(result);

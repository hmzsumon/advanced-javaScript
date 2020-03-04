const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const output = [];
for (let i = 0; i < numbers.length; i++) {
	const eliment = numbers[i];
	const result = eliment * eliment;
	output.push(result);
}
console.log(output);

function squar(element) {
	return eliment * element;
}
const result = numbers.map(function(element) {
	return element * element;
});
console.log(result);
const result = numbers.map((x) => x * x);
console.log(result);

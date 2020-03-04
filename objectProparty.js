const student = [
	{ id: 10, name: 'Omarsany' },
	{ id: 20, name: 'Manna' },
	{ id: 30, name: 'Moyuri' },
	{ id: 40, name: 'DipJol' }
];
const output = [];
for (let i = 0; i < student.length; i++) {
	const element = student[i];
	const result = element.name;
	output.push(result);
}
console.log(output);

const names = student.map((s) => s.name);

const ids = student.map((s) => s.id);
const bigger = student.filter((s) => s.id > 10);
console.log(bigger);

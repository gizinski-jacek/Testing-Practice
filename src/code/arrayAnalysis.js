function arrayAnalysis(arr) {
	return (obj = {
		average: arr.reduce((x, y) => x + y) / arr.length,
		min: Math.min(...arr),
		max: Math.max(...arr),
		length: arr.length,
	});
}

module.exports = arrayAnalysis;

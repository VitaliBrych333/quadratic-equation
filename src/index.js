module.exports = function solveEquation(equation) {
        let str = equation,
	    n = 0,
	    a, b, c , x, y, x1, x2,	
	    length = str.length;
	const RegEx=/\s/g;

	for (let i = 0; i < length; i++) {
	  if (str.charAt(i) == ' ') {
	    n++;		
	  if (n == 3) x = i;
	  if (n == 7) y = i;		
	  }
	}
	
	a = parseInt(str.substring(0, x), 10);
	b = parseInt(str.substring(y, x).replace(RegEx,""), 10);
	c = parseInt(str.substring(y, length).replace(RegEx,""), 10);
    
        const D = + Math.sqrt((Math.pow(b, 2) - 4 * a * c)).toFixed(0);

	if (D < 0) alert('No solutions');

	if (D == 0) x1 = - b / (2 * a);

	if (D > 0) {
	  x1 = (- b - D) / ( 2 * a);
	  x2 = (- b + D) / ( 2 * a);
	}
	
	let arraySolutions = [x1, x2];

	function compareNumeric(a, b) {
	  if (a > b) return 1;
	  if (a < b) return -1;
	}
		
    return (arraySolutions.sort(compareNumeric));// your implementation
}

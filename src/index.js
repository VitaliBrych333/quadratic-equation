module.exports = function solveEquation(equation) {
    var str = equation;
	var n = 0; 
	var a, b, c , x, y;
	for (var i=0; i < str.length; i++) {
		if (str.charAt(i)==' ') {
			n++;
		
		if (n==3) x=i;
		if (n==7) y=i;
		
	    }
	}
	var	RegEx=/\s/g;
	a=parseInt(str.substring(0, x),10);
	b=parseInt(str.substring(y, x).replace(RegEx,""),10);
	c=parseInt(str.substring(y, str.length).replace(RegEx,""),10);
    
    var D = +Math.sqrt((Math.pow(b,2)-4*a*c)).toFixed(0);

	if (D<0) alert('No solutions');
	if (D==0) var x1=-b/(2*a);
	if (D>0) {
		var x1=(-b-D)/(2*a);
		var x2=(-b+D)/(2*a);
	}

	var t=[x1, x2];
	function compareNumeric(a, b) {
	  if (a > b) return 1;
	  if (a < b) return -1;
	}
		// var D = b*b-4*a*c;
		// if (D<0) alert('No solutions');
		// if (D==0) var x1=-b/2*a;
		// if (D>0) {
		// 	var x1=(-b-Math.sqrt(D))/2*a;
		// 	var x2=(-b+Math.sqrt(D))/2*a;
		// }
		
		// var t=[x1, x2];
		// function compareNumeric(a, b) {
		//   if (a > b) return 1;
		//   if (a < b) return -1; 
		// }
	    return (t.sort(compareNumeric));// your implementation
}

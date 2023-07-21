// Your code here
class Calculator{
 	constructor(){
		this.total = 0;
	}

	add(num){
		let total = this.total + num;
		this.total = total;
		return this.total;
	}

	subtract(num){
		let total = this.total - num;
		this.total = total;
		return this.total
	}
	divide(num){
		let total = this.total / num;
		this.total = total;
		return this.total;
	}

	multiply(num){
		let total = this.total * num;
		this.total = total;
		return this.total;
	}
}

/* FOR TESTING ONLY
let calculator = new Calculator();
console.log(calculator.add(50));      // => 50
console.log(calculator.subtract(35)); // => 15
console.log(calculator.multiply(10)); // => 150
console.log(calculator.divide(5));    // => 30
console.log(calculator.total)         // => 30
*/

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
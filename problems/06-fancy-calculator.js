	
	const Calculator = require('./02-calculator')

	class FancyCalculator extends Calculator{
		constructor(total){
			super(total)
		}

		setTotal(newTotal){
			this.total = newTotal;
			return this.total;
		}

		modulo(num){
			let remainder = this.total % num;
			return remainder;
		}

		squared(){
			let squaredTotal = this.total * this.total;
			return squaredTotal; 
		}
	}

/* FOR TESTING ONLY
let fancyCalculator = new FancyCalculator();
console.log(fancyCalculator.setTotal(5)); // => 5
console.log(fancyCalculator.squared());   // => 25
console.log(fancyCalculator.modulo(4));   // => 1
console.log(fancyCalculator.total)        // => 1

// can use instance methods on the Calculator class
console.log(fancyCalculator.add(9))  
*/



/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
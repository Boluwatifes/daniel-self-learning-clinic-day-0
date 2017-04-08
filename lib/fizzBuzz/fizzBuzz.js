'use strict'

module.exports = {

	//function that returns `Fizz`, `Buzz` or `FizzBuzz`
	fizzBuzz: function(num){
		if(typeof num != 'number'){
			return "Invalid input";
		}

		if(num == 0){
			return 0;
		}

		if(num % 3 == 0 && num % 5 == 0){
			return "FizzBuzz";
		}

		else if(num % 3 == 0){
			return "Fizz";
		}

		else if(num % 5 == 0){
			return "Buzz";
		}
		
		else{
			return num;
		}
	}
}
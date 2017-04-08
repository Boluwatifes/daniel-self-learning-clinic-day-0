'use strict'

module.exports = {

	//function that return prime numbers between a set of numbers
	getPrimes : function(num){
		let primes = []
	  if(typeof num != "number")
	  {
	    return "Invalid inputs";
	  }
	  if(num < 2)
	  {
	    return "Prime numbers starts from 2";
	  }
	  
	  for(var i = 2; i <= num; i++)
		{
			var checkPrime =true;
			var n = parseInt(Math.sqrt(i));
			for(var j = 2; j <= n; j++)
			{
				if(i%j == 0 && j != i)
				{
					checkPrime = false;
				}
			}

			if(checkPrime == true)
			{
				primes.push(i);
			}
		}

		return primes;
	}
}
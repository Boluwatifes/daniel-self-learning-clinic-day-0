
var getPrimesLib = require('../../lib/getPrimes/getPrimes.js');
let gp = getPrimesLib;

describe("Get Prime Tests for real numbers", function(){
	it("Should return [2,3,5] for an input of 5", function(){
		expect(gp.getPrimes(5)).toEqual([2,3,5]);
	})

	it("Should return [2,3,5,7] for an input of 10", function(){
		expect(gp.getPrimes(10)).toEqual([ 2, 3, 5,7 ]);
	})

	it("Should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ] for an input of 50", function(){
		expect(gp.getPrimes(50)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
	})
});

describe("GetPrimes Tests for invalid inputs", function(){
	it("Should return `Invalid inputs` for `andela`", function(){
		expect(gp.getPrimes('andela')).toBe('Invalid inputs');
	});

	it("Should return `Prime numbers starts from 2` for `-2`", function(){
		expect(gp.getPrimes(-2)).toBe('Prime numbers starts from 2');
	});

	it("Should return `Prime numbers starts from 2` for `0`", function(){
		expect(gp.getPrimes(0)).toBe('Prime numbers starts from 2');
	});
})
var fizzBuzzLib = require('../../lib/fizzBuzz/fizzBuzz.js');
var fb = fizzBuzzLib;

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fb.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fb.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fb.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fb.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fb.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fb.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fb.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fb.fizzBuzz(101)).toBe(101);
  });

  it("Should return 11 since it is indivisible by 3 and 5", function(){
    expect(fb.fizzBuzz(11)).toBe(11);
  });

  it("Should return `Buzz` for 25", function(){
    expect(fb.fizzBuzz(25)).toBe('Buzz');
  });

  it("Should return 0  since its indivisible by 3 and 5", function(){
    expect(fb.fizzBuzz(0)).toBe(0);
  });

  it("Should return `Invalid input` for `a`", function(){
    expect(fb.fizzBuzz('a')).toBe('Invalid input');
  });

  it("Should return `Invalid input` for `andela`", function(){
    expect(fb.fizzBuzz('andela')).toBe('Invalid input');
  })

});
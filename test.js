'use strict'

// jshint expr: true

var chai = require('chai'),
  expect = chai.expect; //shortcut for chai expect

//The should interface extends Object.prototype to provide a single getter as the starting point for your language assertions. It works on node.js and in all modern browsers except Internet Explorer.
chai.should();

function isEven(num) {
  return num % 2 == 0;
}

describe('Number Tests', function() {
  describe('isEven', function() {
    it('should return true when number is even', function() {
      isEven(4).should.be.true; 
    });
    it('should return false when number is odd', function() {
      expect(isEven(5)).to.be.false;
    })
  });


  function add(num1,num2) {
    return num1 + num2;
  }

  describe('add without setup and teardown',function() {
    var num = 5;

    it('should be ten when adding 5 to 5', function() {
      num = add(num, 5);
      num.should.expect.equal(10);
    });
    
    //Fails due to lack of setup & teardown -- see var num
    //Due to mutated state
    it('should be twelve when adding 7 to 5', function() {
      add(num, 7).should.equal(12);
    }); 

  });

  describe('add with setup and teardown',function() {
    var num;

    beforeEach(function(){
      num = 5;
    });

    it('should be ten when adding 5 to 5', function() {
      num = add(num, 5);
      num.should.equal(10);
    });
    
    //Fails due to lack of setup & teardown -- see var num
    //Due to mutated state
    it('should be twelve when adding 7 to 5', function() {
      add(num, 7).should.equal(12);
    }); 

    it.skip('should be twelve when adding 7 to 5', function() {
      add(num, 7).should.equal(12);
    }); 

    xit('should be twelve when adding 7 to 5', function() {
      add(num, 7).should.equal(12);
    }); 
  });
});

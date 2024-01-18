//My first test mocha case

// Add
// Subtraction
// Multiply
// Division

var assert = require('assert');

describe('Math Operation Test Suite', function() {
    it('Addition of two numbers', function(){
        var a = 10;
        var b = 10;

        var c = a + b;

        assert.equal(c, 20)
    });

    it('Subtraction of two numbers', function() {
        var a = 10;
        var b = 10;

        var c = a - b;

        assert.equal(c, 0)
    });

    it('Multiply of two numbers', function() {
        var a = 10;
        var b = 10;

        var c = a * b;

        assert.equal(c, 100)
    });

    it('Divison of two numbers', function() {
        var a = 10;
        var b = 10;

        var c = a / b;

        assert.equal(c, 0)
    });
});


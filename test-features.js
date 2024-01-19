var assert = require('assert');

describe('Math Operation Test Suite', function() {
    it.only('Addition of two numbers', function(){
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

    it.skip('Multiply of two numbers', function() {
        var a = 10;
        var b = 10;

        var c = a * b;

        assert.equal(c, 100)
    });

    it('Divison of two numbers', function() {
        var a = 10;
        var b = 10;

        var c = a / b;

        assert.equal(c, 1)
    });

    it('This is a pending test')
});


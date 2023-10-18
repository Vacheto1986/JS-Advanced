
//const isSymmetric = require('./symmetric')
const isOddOrEven = require('./evenOrOdd');
const expect = require("chai").expect

describe('Test even or odd functionality', function () {

    it('test for undefined', () => {
        expect(isOddOrEven(1)).to.eq(undefined)
    });

    it('Test for even', () => {
        expect(isOddOrEven('ab')).to.eq('even')
    });

    it('Test for odd', () => {
        expect(isOddOrEven('abc')).to.eq('odd')
    });
});
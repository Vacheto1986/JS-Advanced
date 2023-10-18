const expect = require("chai").expect
const lookupChar = require('./charLookUp');

describe('Test for correct input formats', () => {
    it('test with valid string and valid index', () => {
        expect(lookupChar('string', 3)).to.eq('i')
    });

    it('test with valid string and invalid index', () => {
        expect(lookupChar('string', 8)).to.eq('Incorrect index')
    });

    it('test with invalid string and valid index', () => {
        expect(lookupChar(123, 8)).to.eq(undefined)
    });

    it('test with invalid string and valid index', () => {
        expect(lookupChar(123, '8')).to.eq(undefined)
    });

    it('test with valid string and floating point number index', () => {
        expect(lookupChar('adasdasd', 2.5)).to.eq(undefined)
    });

    it('test with valid string and negative index', () => {
        expect(lookupChar('adasdasd', -2)).to.eq('Incorrect index')
    });

});
import { expect } from 'chai'
import { Calculator } from '../src/myApp'

describe('Calculator', () => {

    describe('#calculate()', () => {
        it('should call the correct function', () => {
            expect(Calculator.calculate([0,0], 'sum')).to.equal(0)
            expect(Calculator.calculate([1,1], 'average')).to.equal(1)
        })
    })

    describe('#sum()', () => {
        it('should return the sum of an array of numbers', () => {
            expect(Calculator.sum([1, -1])).to.equal(0);
            expect(Calculator.sum([0, 0])).to.equal(0);

        })
    })

    describe('#average()', () => {
        it('should return the average of an array of numbers', () => {
            expect(Calculator.average([1, 1])).to.equal(1);
        })
    })
})

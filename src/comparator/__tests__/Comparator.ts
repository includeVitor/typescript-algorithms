import { Comparator } from '@comparator/Comparator'
describe('Comparator', () => {
    it('should be able to compare with default comparator function', () => {
        const comparator = new Comparator()

        expect(comparator.equal(35, 35)).toBe(true)
        expect(comparator.equal(35, 70)).toBe(false)
        expect(comparator.equal('a string', 'a string')).toBe(true)
        expect(comparator.lessThan(35, 70)).toBe(true)
        expect(comparator.lessThan(-35, 35)).toBe(true)
        expect(comparator.lessThan('c', 'd')).toBe(true)
        expect(comparator.lessThan('c', 'de')).toBe(true)
        expect(comparator.lessThan(100, 125)).toBe(false)
    })
})

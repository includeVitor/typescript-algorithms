import { Comparator } from '@comparator/Comparator'
describe('Comparator', () => {
    it('should be able to compare with default comparator function', () => {
        const comparator = new Comparator()

        expect(comparator.equal(35, 35)).toBe(true)
        expect(comparator.equal(35, 70)).toBe(false)
        expect(comparator.equal('a string', 'a string')).toBe(true)
    })
})

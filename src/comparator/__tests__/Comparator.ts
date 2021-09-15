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
        expect(comparator.lessThan(35, 35)).toBe(false)
        expect(comparator.lessThan(125, 100)).toBe(false)

        expect(comparator.lessThanOrEqual(125, 100)).toBe(false)
        expect(comparator.lessThanOrEqual(35, 35)).toBe(true)
        expect(comparator.lessThanOrEqual(-125, -125)).toBe(true)

        expect(comparator.greaterThan(25, 25)).toBe(false)
        expect(comparator.greaterThan(0, -25)).toBe(true)

        expect(comparator.greaterThanOrEqual(200, 0)).toBe(true)
        expect(comparator.greaterThanOrEqual(200, 200)).toBe(true)
        expect(comparator.greaterThanOrEqual(0, 200)).toBe(false)
    })

    it('should be able to compare with a custom function', () => {
        const CustomComparator = new Comparator((a: string, b: string) => {
            if (a.length === b.length) return 0
            return a.length < b.length ? -1 : 1
        })

        expect(CustomComparator.equal('X', 'a')).toBe(true)
        expect(CustomComparator.equal('x', '')).toBe(false)
        expect(CustomComparator.lessThan('b', 'xx')).toBe(true)
        expect(CustomComparator.greaterThanOrEqual('s', 'sh')).toBe(false)
        expect(CustomComparator.greaterThanOrEqual('sX', 'a')).toBe(true)
        expect(CustomComparator.greaterThanOrEqual('k', 'k')).toBe(true)

        CustomComparator.reverse()
    })
})

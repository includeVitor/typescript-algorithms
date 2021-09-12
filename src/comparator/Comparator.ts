import { IComparator, Value, ComparatorFunction } from './types'

export class Comparator implements IComparator {
    private _compare

    constructor(compareFunction: ComparatorFunction = null) {
        this._compare = compareFunction || Comparator.defaultCompareFunction
    }

    static defaultCompareFunction = (a: Value, b: Value): number => {
        if (a === b) return 0
        return a < b ? -1 : 1
    }

    equal = (a: any, b: any) => this._compare(a, b) === 0

    lessThan = (a: any, b: any) => this._compare(a, b) < 0

    greaterThan = (a: any, b: any) => this._compare(a, b) > 0

    lessThanOrEqual = (a: any, b: any) =>
        this.lessThan(a, b) || this.equal(a, b)

    greaterThanOrEqual = (a: any, b: any) =>
        this.greaterThan(a, b) || this.equal(a, b)

    reverse = () => {
        const compareOriginal = this._compare
        this._compare = (a: any, b: any) => compareOriginal(b, a)
    }
}

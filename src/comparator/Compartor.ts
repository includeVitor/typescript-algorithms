import { IComparator, value } from './types'

export class Comparator implements IComparator {
    private _compare

    constructor(compareFunction: any) {
        this._compare = compareFunction || Comparator.defaultCompareFunction
    }

    static defaultCompareFunction = (a: value, b: value): number => {
        if (a === b) return 0
        return a < b ? -1 : 1
    }

    equal = (a: value, b: value) => this._compare(a, b) === 0

    lessThan = (a: value, b: value) => this._compare(a, b) < 0

    greaterThan = (a: value, b: value) => this._compare(a, b) > 0

    lessThanOrEqual = (a: value, b: value) =>
        this.lessThan(a, b) || this.equal(a, b)

    greaterThanOrEqual = (a: value, b: value) =>
        this.greaterThan(a, b) || this.equal(a, b)

    reverse = () => {
        const compareOriginal = this._compare
        this._compare = (a: value, b: value) => compareOriginal(b, a)
    }
}

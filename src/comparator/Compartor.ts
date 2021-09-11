import { IComparator, Value } from './types'

export class Comparator implements IComparator {
    private _compare

    constructor(compareFunction: any) {
        this._compare = compareFunction || Comparator.defaultCompareFunction
    }

    static defaultCompareFunction = (a: Value, b: Value): number => {
        if (a === b) return 0
        return a < b ? -1 : 1
    }

    equal = (a: Value, b: Value) => this._compare(a, b) === 0

    lessThan = (a: Value, b: Value) => this._compare(a, b) < 0

    greaterThan = (a: Value, b: Value) => this._compare(a, b) > 0

    lessThanOrEqual = (a: Value, b: Value) =>
        this.lessThan(a, b) || this.equal(a, b)

    greaterThanOrEqual = (a: Value, b: Value) =>
        this.greaterThan(a, b) || this.equal(a, b)

    reverse = () => {
        const compareOriginal = this._compare
        this._compare = (a: Value, b: Value) => compareOriginal(b, a)
    }
}

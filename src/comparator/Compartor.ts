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
}

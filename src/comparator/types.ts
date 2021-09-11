interface IComparator {
    equal(a: value, b: value): boolean
    lessThan(a: value, b: value): boolean
    greaterThan(a: value, b: value): boolean
    greaterThanOrEqual(a: value, b: value): boolean
}

type value = string | number

export type { value, IComparator }

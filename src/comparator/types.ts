interface IComparator {
    equal(a: Value, b: Value): boolean
    lessThan(a: Value, b: Value): boolean
    greaterThan(a: Value, b: Value): boolean
    greaterThanOrEqual(a: Value, b: Value): boolean
    reverse(): void
}

type Value = string | number

type ComparatorFunction = ((a: Value, b: Value) => number) | null

export type { ComparatorFunction, Value, IComparator }

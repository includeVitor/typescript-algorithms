interface IComparator {
    equal(a: Value, b: Value): boolean
    lessThan(a: Value, b: Value): boolean
    greaterThan(a: Value, b: Value): boolean
    greaterThanOrEqual(a: Value, b: Value): boolean
    reverse(): void
}

type Value = string | number

type ComparatorFunction = ((a: any, b: any) => number) | null

export type { ComparatorFunction, Value, IComparator }

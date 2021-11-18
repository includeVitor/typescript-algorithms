import { Comparator } from '@comparator/Comparator'
import { ComparatorFunction } from '@comparator/types'
import { Node } from '@data-structures/doubly-linked-list/types'

export class DoublyLinkedList<T = never> {
    private _compare: Comparator

    constructor(
        public head: Node<T> = null,
        public tail: Node<T> = null,
        comparatorFunction: ComparatorFunction = null
    ) {
        this._compare = new Comparator(comparatorFunction)
    }
}

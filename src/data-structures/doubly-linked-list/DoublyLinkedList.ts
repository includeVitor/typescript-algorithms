import { Comparator } from '@comparator/Comparator'
import { ComparatorFunction } from '@comparator/types'
import { DoublyLinkedListNode } from '@data-structures/doubly-linked-list'
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

    prepend = (value: T) => {
        /**
         * Make new node to be the head
         */
        const newNode = new DoublyLinkedListNode(value, this.head)

        /**
         * If there's head, make the previous receive a newNode
         */
        if (this.head) {
            this.head.previous = newNode
        }

        this.head = newNode

        /**
         * Create a new tail if doesn't exists yet
         */
        if (!this.tail) {
            this.tail = newNode
        }

        return this
    }
}

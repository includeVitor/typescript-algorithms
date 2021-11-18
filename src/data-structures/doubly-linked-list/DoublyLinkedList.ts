import { Comparator } from '@comparator/Comparator'
import { ComparatorFunction } from '@comparator/types'
import { DoublyLinkedListNode } from '@data-structures/doubly-linked-list'
import {
    IDoublyLinkedList,
    Node
} from '@data-structures/doubly-linked-list/types'

export class DoublyLinkedList<T = never> implements IDoublyLinkedList<T> {
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

    append = (value: T) => {
        const newNode = new DoublyLinkedListNode(value)

        /**
         * Create new head and tail if doesn't exists yet
         */
        if (!this.head || !this.tail) {
            this.head = newNode
            this.tail = newNode

            return this
        }

        /**
         * Append the new node at the end of linked list
         */
        this.tail.next = newNode

        /**
         * newNode previous should be link to tail
         */
        newNode.previous = this.tail

        this.tail = newNode

        return this
    }
}

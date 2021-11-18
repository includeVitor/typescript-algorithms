import {
    FindArguments,
    ILinkedList,
    Node,
    ToStringArguments
} from '@data-structures/linked-list/types'
import { LinkedListNode } from '@data-structures/linked-list'
import { Comparator } from '@comparator/Comparator'
import { ComparatorFunction } from '@comparator/types'

export class LinkedList<T = never> implements ILinkedList<T> {
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
         * Make new node to be a head
         */
        const newNode = new LinkedListNode(value, this.head)
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
        const newNode = new LinkedListNode(value)

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
        this.tail = newNode

        return this
    }

    delete = (value: T) => {
        /**
         * Returns null if the list don't have head
         */
        if (!this.head) {
            return null
        }

        let deletedNode = null

        /**
         * If the head must be deleted, make the next node to be the head
         */
        while (this.head && this._compare.equal(this.head.value, value)) {
            deletedNode = this.head
            this.head = this.head.next
        }

        let currentNode = this.head

        /**
         * If the next node must be deleted make next node to be next next node
         */
        if (currentNode !== null) {
            while (currentNode.next) {
                if (this._compare.equal(currentNode.next.value, value)) {
                    deletedNode = currentNode.next
                    currentNode.next = currentNode.next.next
                } else {
                    currentNode = currentNode?.next
                }
            }
        }

        /**
         * If the tail must be deleted, make the tail be the head as well
         * */
        if (this._compare.equal(this.tail?.value, value)) {
            this.tail = currentNode
        }

        return deletedNode
    }

    find = (node: FindArguments<T>) => {
        if (!this.head) return null

        let currentNode: Node<T> = this.head

        while (currentNode) {
            /**
             * If recives an callback try to find node by callback
             */
            if (node.callback && node.callback(currentNode.value)) {
                return currentNode
            }

            /**
             * If recives an value try to find node by value
             */
            if (
                node.value !== undefined &&
                this._compare.equal(currentNode.value, node.value)
            ) {
                return currentNode
            }

            currentNode = currentNode.next
        }

        return null
    }

    deleteTail = () => {
        const deletedTail = this.tail

        /**
         * If there is only one node, make the tail and the head to be null
         */
        if (this.head === this.tail) {
            this.head = null
            this.tail = null

            return deletedTail
        }

        let currentNode = this.head
        /**
         * If there's more than one node...
         * Grab the last node before the head and link to null
         */
        while (currentNode?.next) {
            if (!currentNode.next.next) {
                currentNode.next = null
            } else {
                currentNode = currentNode.next
            }
        }

        this.tail = currentNode

        return deletedTail
    }

    deleteHead = () => {
        if (!this.head) return null

        const deletedHead = this.head

        if (this.head.next) {
            this.head = this.head.next
        } else {
            this.head = null
            this.tail = null
        }

        return deletedHead
    }

    fromArray = (arr: T[]) => {
        arr.forEach(value => this.append(value))
        return this
    }

    toArray = () => {
        const nodes = []

        let currentNode = this.head

        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next
        }

        return nodes
    }

    toString = (callback: ToStringArguments = null) =>
        this.toArray()
            .map(node => node.toString(callback))
            .toString()

    reverse = () => {
        let currNode = this.head
        let prevNode = null
        let nextNode = null

        while (currNode) {
            nextNode = currNode.next

            currNode.next = prevNode

            prevNode = currNode
            currNode = nextNode
        }

        this.tail = this.head
        this.head = prevNode

        return this
    }
}

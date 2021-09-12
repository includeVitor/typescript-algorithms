import { LinkedListNode } from './LinkedListNode'
import { FindArguments, ILinkedList, Node, ToStringArguments } from './types'
import { Comparator } from '@comparator/Comparator'
import { ComparatorFunction, Value } from '@comparator/types'

export class LinkedList implements ILinkedList {
    private _compare: Comparator

    constructor(
        public head: Node = null,
        public tail: Node = null,
        comparatorFunction: ComparatorFunction = null
    ) {
        this._compare = new Comparator(comparatorFunction)
    }

    prepend = (Value: Value) => {
        const newNode = new LinkedListNode(Value, this.head)
        this.head = newNode

        if (!this.tail) {
            this.tail = newNode
        }

        return this
    }

    append = (Value: Value) => {
        const newNode = new LinkedListNode(Value)

        if (!this.head || !this.tail) {
            this.head = newNode
            this.tail = newNode

            return this
        }

        this.tail.next = newNode
        this.tail = newNode

        return this
    }

    delete = (value: Value) => {
        if (!this.head) {
            return null
        }

        let deletedNode = null

        while (this.head && this._compare.equal(this.head.value, value)) {
            deletedNode = this.head
            this.head = this.head.next
        }

        let currentNode = this.head

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

        if (this._compare.equal(this.tail?.value, value)) {
            this.tail = currentNode
        }

        return deletedNode
    }

    find = (node: FindArguments) => {
        if (!this.head) return null

        let currentNode: Node = this.head

        while (currentNode) {
            if (node.callback && node.callback(currentNode.value)) {
                return currentNode
            }

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

        if (this.head === this.tail) {
            this.head = null
            this.tail = null

            return deletedTail
        }

        let currentNode = this.head

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

    fromArray = (arr: Value[]) => {
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

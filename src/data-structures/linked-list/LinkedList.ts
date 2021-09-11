import { LinkedListNode } from './LinkedListNode'
import { ILinkedList, Node } from './types'
import { Comparator } from '@comparator/Comparator'
import { ComparatorFunction, Value } from '@comparator/types'

export class LinkedList implements ILinkedList {
    private _head: Node
    private _tail: Node
    private _compare: Comparator

    constructor(comparatorFunction: ComparatorFunction) {
        this._head = null
        this._tail = null
        this._compare = new Comparator(comparatorFunction)
    }

    prepend = (Value: Value): LinkedList => {
        const newNode = new LinkedListNode(Value, this._head)
        this._head = newNode

        if (!this._tail) {
            this._tail = newNode
        }

        return this
    }

    append = (Value: Value): LinkedList => {
        const newNode = new LinkedListNode(Value)

        if (!this._head || !this._tail) {
            this._head = newNode
            this._tail = newNode

            return this
        }

        this._tail.next = newNode
        this._tail = newNode

        return this
    }

    delete = (value: Value): Node => {
        if (!this._head) {
            return null
        }

        let deletedNode = null

        while (this._head && this._compare.equal(this._head.value, value)) {
            deletedNode = this._head
            this._head = this._head.next
        }

        let currentNode = this._head

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

        if (this._compare.equal(this._tail?.value, value)) {
            this._tail = currentNode
        }

        return deletedNode
    }
}

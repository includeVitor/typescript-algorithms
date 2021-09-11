import { LinkedListNode } from './LinkedListNode'
import { ILinkedList, Node } from './types'
import { Value } from '@comparator/types'

export class LinkedList implements ILinkedList {
    private _head: Node
    private _tail: Node

    constructor() {
        this._head = null
        this._tail = null
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

    // delete = (Value: any)  => {
    //     if (!this._head) {
    //         return null
    //     }

    //     let deletedNode = null

    //     while(this._head && this.)
    // }
}

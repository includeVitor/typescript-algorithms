import { Node } from '@data-structures/linked-list/types'
import { LinkedListNode } from '@data-structures/linked-list'

export class LinkedList {
    private _head: Node
    private _tail: Node

    constructor() {
        this._head = null
        this._tail = null
    }

    prepend(value: any): LinkedList {
        const newNode = new LinkedListNode(value, this._head)
        this._head = newNode

        if (!this._tail) {
            this._tail = newNode
        }

        return this
    }
}

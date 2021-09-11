import { Node } from '@data-structures/linked-list/types'
import { LinkedListNode } from '@data-structures/linked-list'

export class LinkedList {
    private _head: Node
    private _tail: Node

    constructor() {
        this._head = null
        this._tail = null
    }

    prepend = (value: any): LinkedList => {
        const newNode = new LinkedListNode(value, this._head)
        this._head = newNode

        if (!this._tail) {
            this._tail = newNode
        }

        return this
    }

    append = (value: any): LinkedList => {
        const newNode = new LinkedListNode(value)

        if (!this._head || !this._tail) {
            this._head = newNode
            this._tail = newNode

            return this
        }

        this._tail.next = newNode
        this._tail = newNode

        return this
    }

    // delete = (value: any)  => {
    //     if (!this._head) {
    //         return null
    //     }

    //     let deletedNode = null

    //     while(this._head && this.)
    // }
}

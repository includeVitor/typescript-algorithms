import { Node, ToStringArguments } from '@data-structures/linked-list/types'

export class LinkedListNode<T = never> {
    constructor(public value: T, public next: Node<T> = null) {}

    toString(callback: ToStringArguments = null): string {
        return callback ? callback(this.value) : `${this.value}`
    }
}

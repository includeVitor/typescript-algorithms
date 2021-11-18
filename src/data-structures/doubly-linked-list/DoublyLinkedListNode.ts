import {
    Node,
    ToStringArguments
} from '@data-structures/doubly-linked-list/types'

export default class DoublyLinkedListNode<T = never> {
    constructor(public value: T, public next: Node<T> = null) {}

    toString(callback: ToStringArguments = null): string {
        return callback ? callback(this.value) : `${this.value}`
    }
}

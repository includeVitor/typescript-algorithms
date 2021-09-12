import { Node, ToStringArguments } from '@data-structures/linked-list/types'

export class LinkedListNode {
    constructor(public value: any, public next: Node = null) {}

    toString(callback: ToStringArguments = null): string {
        return callback ? callback(this.value) : `${this.value}`
    }
}

import { Node } from '@data-structures/linked-list/types'

export class LinkedListNode {
    constructor(public value: any, public next: Node = null) {}

    toString(callback: (value: any) => string): string {
        return callback ? callback(this.value) : `${this.value}`
    }
}

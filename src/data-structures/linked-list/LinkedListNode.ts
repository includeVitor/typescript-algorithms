import { Node } from '@data-structures/linked-list/types'

export class LinkedListNode {
    constructor(public Value: any, public next: Node = null) {}

    toString(callback: (Value: any) => string): string {
        return callback ? callback(this.Value) : `${this.Value}`
    }
}

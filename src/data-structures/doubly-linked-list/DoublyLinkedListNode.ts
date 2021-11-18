import { Node } from './types'

export default class DoublyLinkedListNode<T = never> {
    constructor(public value: T, public next: Node<T> = null) {}
}

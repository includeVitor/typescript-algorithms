import { DoublyLinkedList } from './DoublyLinkedList'
import { DoublyLinkedListNode } from './DoublyLinkedListNode'

interface IDoublyLinkedList<T> {
    prepend(value: T): DoublyLinkedList<T>
    append(value: T): DoublyLinkedList<T>
}

type Node<T> = DoublyLinkedListNode<T> | null

type ToStringArguments = ((str: any) => string) | null

export type { IDoublyLinkedList, Node, ToStringArguments }

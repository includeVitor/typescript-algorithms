import { DoublyLinkedListNode } from './DoublyLinkedListNode'

type Node<T> = DoublyLinkedListNode<T> | null

type ToStringArguments = ((str: any) => string) | null

export type { Node, ToStringArguments }

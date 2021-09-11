import { Value } from '@comparator/types'
import { LinkedList } from './LinkedList'
import { LinkedListNode } from './LinkedListNode'

interface ILinkedList {
    prepend(value: Value): LinkedList
    append(value: Value): LinkedList
    delete(value: Value): Node
}

type Node = LinkedListNode | null

export type { ILinkedList, Node }

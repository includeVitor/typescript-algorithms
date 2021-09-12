import { Value } from '@comparator/types'
import { LinkedList } from './LinkedList'
import { LinkedListNode } from './LinkedListNode'

interface ILinkedList {
    prepend(value: Value): LinkedList
    append(value: Value): LinkedList
    delete(value: Value): Node
    find(node: FindArguments): Node
}

type FindArguments = {
    value: Value | undefined
    callback: ((value: Value) => boolean) | undefined
}

type Node = LinkedListNode | null

export type { ILinkedList, Node, FindArguments }

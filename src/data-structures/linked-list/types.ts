import { Value } from '@comparator/types'
import { LinkedList } from './LinkedList'
import { LinkedListNode } from './LinkedListNode'

interface ILinkedList {
    prepend(value: Value): LinkedList
    append(value: Value): LinkedList
    delete(value: Value): Node
    find(node: FindArguments): Node
    deleteTail(): Node
    deleteHead(): Node
    fromArray(arr: Value[]): LinkedList
    toArray(): LinkedListNode[]
    toString(callback: ToStringArguments): string
    reverse(): LinkedList
}

type FindArguments = {
    value: Value | undefined
    callback: ((value: Value) => boolean) | undefined
}

type ToStringArguments = ((str: string) => string) | null

type Node = LinkedListNode | null

export type { ILinkedList, Node, FindArguments, ToStringArguments }

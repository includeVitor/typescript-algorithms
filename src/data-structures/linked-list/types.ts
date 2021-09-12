import { LinkedList } from './LinkedList'
import { LinkedListNode } from './LinkedListNode'

interface ILinkedList<T> {
    prepend(value: T): LinkedList<T>
    append(value: T): LinkedList<T>
    delete(value: T): Node
    find(node: FindArguments<T>): Node
    deleteTail(): Node
    deleteHead(): Node
    fromArray(arr: T[]): LinkedList<T>
    toArray(): LinkedListNode[]
    toString(callback: ToStringArguments): string
    reverse(): LinkedList<T>
}

type FindArguments<T> = {
    value?: T
    callback?: (value: any) => boolean
}

type ToStringArguments = ((str: any) => string) | null

type Node = LinkedListNode | null

export type { ILinkedList, Node, FindArguments, ToStringArguments }

import { LinkedList } from './LinkedList'
import { LinkedListNode } from './LinkedListNode'

interface ILinkedList {
    prepend(value: any): LinkedList
    append(value: any): LinkedList
    delete(value: any): Node
    find(node: FindArguments): Node
    deleteTail(): Node
    deleteHead(): Node
    fromArray(arr: any[]): LinkedList
    toArray(): LinkedListNode[]
    toString(callback: ToStringArguments): string
    reverse(): LinkedList
}

type FindArguments = {
    value?: any
    callback?: (value: any) => boolean
}

type ToStringArguments = ((str: string) => string) | null

type Node = LinkedListNode | null

export type { ILinkedList, Node, FindArguments, ToStringArguments }

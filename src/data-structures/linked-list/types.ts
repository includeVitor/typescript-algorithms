import { LinkedList, LinkedListNode } from '@data-structures/linked-list'

interface ILinkedList<T> {
    prepend(value: T): LinkedList<T>
    append(value: T): LinkedList<T>
    delete(value: T): Node<T>
    find(node: FindArguments<T>): Node<T>
    deleteTail(): Node<T>
    deleteHead(): Node<T>
    fromArray(arr: T[]): LinkedList<T>
    toArray(): LinkedListNode<T>[]
    toString(callback: ToStringArguments): string
    reverse(): LinkedList<T>
}

type FindArguments<T> = {
    value?: T
    callback?: (value: any) => boolean
}

type ToStringArguments = ((str: any) => string) | null

type Node<T> = LinkedListNode<T> | null

export type { ILinkedList, Node, FindArguments, ToStringArguments }

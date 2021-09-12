import { LinkedListNode } from '@data-structures/linked-list/LinkedListNode'

describe('LinkedListNode', () => {
    it('should be able to create list node with value', () => {
        const node = new LinkedListNode<number>(150)

        expect(node.value).toBe(150)
        expect(node.next).toBeNull()
    })

    it('should be able to link nodes together', () => {
        const node2 = new LinkedListNode<number>(150)
        const node1 = new LinkedListNode<number>(300, node2)

        expect(node1.next).toBeDefined()
        expect(node2.next).toBeNull()
        expect(node1.value).toBe(300)
        expect(node1.next?.value).toBe(150)
    })
})

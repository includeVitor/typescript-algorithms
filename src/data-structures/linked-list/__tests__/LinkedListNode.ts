import { LinkedListNode } from '@data-structures/linked-list/LinkedListNode'

describe('LinkedListNode', () => {
    it('should be able to create list node with value', () => {
        const node = new LinkedListNode<number>(150)

        expect(node.value).toBe(150)
        expect(node.next).toBeNull()
    })
    it('should be able to create an node with object', () => {
        const nodeValue = { value: 500, key: 'key500' }

        const node = new LinkedListNode<{ value: number; key: string }>(
            nodeValue
        )

        expect(node.value.value).toBe(500)
        expect(node.value.key).toBe('key500')
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

    it('should be able to convert a node to string', () => {
        const node = new LinkedListNode<number>(78)
        expect(node.toString()).toBe('78')

        node.value = 45
        expect(node.toString()).toBe('45')
    })

    it('should be able to string with a custom stringfunction', () => {
        const nodeValue = { value: 35, key: 'key35' }
        const node = new LinkedListNode(nodeValue)

        const toStringCallback = (value: { value: number; key: string }) =>
            `value: ${value.value}, key: ${value.key}`

        expect(node.toString(toStringCallback)).toBe('value: 35, key: key35')
    })
})

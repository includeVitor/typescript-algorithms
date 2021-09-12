import { LinkedList } from '@data-structures/linked-list/LinkedList'

describe('LinkedList', () => {
    it('should create empty linked list', () => {
        const linkedList = new LinkedList()
        expect(linkedList.toString()).toBe('')
    })
})

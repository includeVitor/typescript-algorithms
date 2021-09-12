import { LinkedList } from '@data-structures/linked-list/LinkedList'

describe('LinkedList', () => {
    it('should be able to create an empty linked list', () => {
        //Arrange
        const linkedList = new LinkedList()

        //Act, Assert
        expect(linkedList.toString()).toBe('')
    })

    it('should be able to append a node to a linked list', () => {
        //Arrange
        const linkedList = new LinkedList()

        //Act, Assert
        expect(linkedList.head).toBeNull()
        expect(linkedList.tail).toBeNull()

        //Act
        linkedList.append(20)
        linkedList.append(50)

        //Assert
        expect(linkedList.toString()).toBe('20,50')
        expect(linkedList.tail?.next).toBeNull()
    })
})

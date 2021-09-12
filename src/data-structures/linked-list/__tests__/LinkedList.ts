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

    it('should be able to prepend a node to a linked list', () => {
        //Arrange
        const linkedList = new LinkedList()

        //Act, Assert
        linkedList.prepend(2)
        expect(linkedList.head?.toString()).toBe('2')
        expect(linkedList.tail?.toString()).toBe('2')

        //Act
        linkedList.append(1)
        linkedList.prepend(3)

        //Assert
        expect(linkedList.toString()).toBe('3,2,1')
    })
})

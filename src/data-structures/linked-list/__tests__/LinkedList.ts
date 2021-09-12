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

    it('should be able to delete an node by value', () => {
        const linkedList = new LinkedList()

        expect(linkedList.delete(26)).toBeNull()

        linkedList.append(25)
        linkedList.append(50)
        linkedList.append(75)
        linkedList.append(100)
        linkedList.append(125)

        expect(linkedList.head?.toString()).toBe('25')
        expect(linkedList.tail?.toString()).toBe('125')

        const deletedNode = linkedList.delete(100)
        expect(deletedNode?.value).toBe(100)
        expect(linkedList.toString()).toBe('25,50,75,125')

        linkedList.delete(25)
        expect(linkedList.toString()).toBe('50,75,125')

        linkedList.delete(75)
        expect(linkedList.toString()).toBe('50,125')

        expect(linkedList.head?.toString()).toBe('50')
        expect(linkedList.tail?.toString()).toBe('125')

        linkedList.delete(50)
        expect(linkedList.toString()).toBe('125')

        expect(linkedList.head?.toString()).toBe('125')
        expect(linkedList.tail?.toString()).toBe('125')

        linkedList.delete(125)
        expect(linkedList.toString()).toBe('')
    })
})

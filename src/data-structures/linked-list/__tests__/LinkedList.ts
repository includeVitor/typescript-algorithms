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
        //Arrange
        const linkedList = new LinkedList()

        //Act,Assert
        expect(linkedList.delete(26)).toBeNull()

        //Act
        linkedList.append(25)
        linkedList.append(50)
        linkedList.append(75)
        linkedList.append(100)
        linkedList.append(125)

        //Act,Assert
        expect(linkedList.head?.toString()).toBe('25')
        expect(linkedList.tail?.toString()).toBe('125')

        //Act,Assert
        const deletedNode = linkedList.delete(100)
        expect(deletedNode?.value).toBe(100)
        expect(linkedList.toString()).toBe('25,50,75,125')

        //Act,Assert
        linkedList.delete(25)
        expect(linkedList.toString()).toBe('50,75,125')

        //Act,Assert
        linkedList.delete(75)
        expect(linkedList.toString()).toBe('50,125')

        //Act,Assert
        expect(linkedList.head?.toString()).toBe('50')
        expect(linkedList.tail?.toString()).toBe('125')

        //Act,Assert
        linkedList.delete(50)
        expect(linkedList.toString()).toBe('125')

        //Act,Assert
        expect(linkedList.head?.toString()).toBe('125')
        expect(linkedList.tail?.toString()).toBe('125')

        //Act,Assert
        linkedList.delete(125)
        expect(linkedList.toString()).toBe('')
    })

    it('should be able to delete linked list tail', () => {
        //Arrange
        const linkedList = new LinkedList()

        //Act
        linkedList.append(75)
        linkedList.append(150)
        linkedList.append(225)

        //Act,Assert
        expect(linkedList.head?.toString()).toBe('75')
        expect(linkedList.tail?.toString()).toBe('225')

        //Act
        const deletedNode1 = linkedList.deleteTail()

        //Act,Assert
        expect(deletedNode1?.value).toBe(225)
        expect(linkedList.toString()).toBe('75,150')

        //Act,Assert
        expect(linkedList.head?.toString()).toBe('75')
        expect(linkedList.tail?.toString()).toBe('150')

        //Act
        const deletedNode2 = linkedList.deleteTail()

        //Act,Assert
        expect(deletedNode2?.value).toBe(150)
        expect(linkedList.toString()).toBe('75')

        //Act,Assert
        expect(linkedList.head?.toString()).toBe('75')
        expect(linkedList.tail?.toString()).toBe('75')

        //Act
        const deletedNode3 = linkedList.deleteTail()

        //Act,Assert
        expect(deletedNode3?.value).toBe(75)
        expect(linkedList.toString()).toBe('')

        //Act,Assert
        expect(linkedList.head).toBeNull()
        expect(linkedList.tail).toBeNull()
    })

    it('should be able to delete linked list head', () => {
        //Arrange
        const linkedList = new LinkedList()

        //Act,Assert
        expect(linkedList.deleteHead()).toBeNull()

        //Act
        linkedList.append(45)
        linkedList.append(90)

        //Act,Assert
        expect(linkedList.head?.toString()).toBe('45')
        expect(linkedList.tail?.toString()).toBe('90')

        //Act
        const deletedNode1 = linkedList.deleteHead()

        //Act, Assert
        expect(deletedNode1?.value).toBe(45)
        expect(linkedList.toString()).toBe('90')
        expect(linkedList.head?.toString()).toBe('90')
        expect(linkedList.tail?.toString()).toBe('90')

        //Act
        const deletedNode2 = linkedList.deleteHead()

        //Act,Assert
        expect(deletedNode2?.value).toBe(90)
        expect(linkedList.toString()).toBe('')
        expect(linkedList.head).toBeNull()
        expect(linkedList.tail).toBeNull()
    })

    it('should be able to append objects', () => {
        const linkedList = new LinkedList()

        const nodeValue1 = { value: 100, key: 'key100' }
        const nodeValue2 = { value: 200, key: 'key200' }

        linkedList.append(nodeValue1).prepend(nodeValue2)

        const nodeStr = (value: any) => `${value.key}:${value.value}`

        expect(linkedList.toString(nodeStr)).toBe('key200:200,key100:100')
    })

    it('should be able to find node by value', () => {
        const linkedList = new LinkedList()

        expect(linkedList.find({ value: 300 })).toBeNull()

        linkedList.append(400)
        expect(linkedList.find({ value: 400 })).toBeDefined()

        linkedList.append(500).append(600)

        const node = linkedList.find({ value: 500 })
        expect(node?.value).toBe(500)
        expect(linkedList.find({ value: 800 })).toBeNull()
    })

    it('should be able to find node by callback', () => {
        const linkedList = new LinkedList()

        linkedList.append({ value: 30, key: 'key30' })
        linkedList.append({ value: 60, key: 'key60' })
        linkedList.append({ value: 90, key: 'key90' })

        // const node = linkedList.find({
        //     callback: value => value.key === 'key60'
        // })
    })
})

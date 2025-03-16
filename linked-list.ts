export {}

class Node<T> {
  value: T
  next?: Node<T> | null
  // prev?: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
    // this.prev = null
  }
}

class LinkedList<T> {
  length: number
  head: Node<T> | null
  tail: Node<T> | null

  constructor() {
    this.length = 0
    this.head = null
    this.tail = this.head
  }

  push(value: T): number {
    const pointer = new Node(value)

    if (this.head === null) {
      this.head = pointer
    }

    if (this.tail === null) {
      this.tail = this.head
    }

    if (this.length > 0) {
      this.tail.next = pointer
      this.tail = pointer
    }

    this.length++
    return this.length
  }

  pop(): Node<T> | null {
    if (this.length <= 1 || this.head === null || this.tail === null) {
      this.length = 0
      this.head = null
      this.tail = null
      return null
    }

    let current: Node<T> = this.head

    for (let i = 1; i < this.length - 1; i++) {
      current = current.next!
    }

    current.next = null
    this.tail = current

    this.length--
    return current
  }

  prepend(value: T): number {
    if (this.head === null || this.tail === null) {
      return this.push(value)
    }

    const node = new Node(value)

    node.next = this.head
    this.head = node

    this.length++
    return this.length
  }
}

const list = new LinkedList<number>()

// list.push(5)
// list.push(10)
// list.push(15)
// list.push(20)
// list.pop()
// list.pop()
// list.pop()
// list.pop()
// // list.pop()
// list.push(20)
// list.push(25)
list.prepend(5)
list.push(10)
list.pop()
list.prepend(10)
list.push(20)

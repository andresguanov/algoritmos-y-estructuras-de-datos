export {}

class Nodo<T> {
  value: T
  next?: Nodo<T> | null
  prev?: Nodo<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList<T> {
  length: number
  head: Nodo<T> | null
  tail: Nodo<T> | null

  constructor() {
    this.length = 0
    this.head = null
    this.tail = this.head
  }

  push(value: T): number {
    const pointer = new Nodo(value)
    pointer.prev = this.tail

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

  pop(): Nodo<T> | null {
    if (this.length <= 1 || this.head === null || this.tail === null) {
      this.length = 0
      this.head = null
      this.tail = null
      return null
    }

    let current: Nodo<T> = this.head

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

    const nodo = new Nodo(value)

    nodo.next = this.head
    this.head = nodo

    this.length++
    return this.length
  }

  insert(value, index) {
    if (index >= this.length || index < 0) {
      return this.push(value)
    }

    const nodo = new Nodo(value)
    let current: Nodo<T> = this.head!

    for (let i = 1; i < index; i++) {
      current = current.next!
    }

    nodo.next = current.next
    current.next = nodo

    this.length++
    return this.length
  }
}

const list = new LinkedList<number>()

list.push(5)
list.push(10)
list.push(15)
// list.push(20)
// list.pop()
// list.pop()
// list.pop()
// list.pop()
// // list.pop()
// list.push(20)
// list.push(25)
// list.prepend(5)
// list.push(10)
// list.pop()
// list.prepend(10)
// list.push(20)

/* eslint-disable max-classes-per-file */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
class List {
  constructor(value) {
    this.head = value;
    this.length = 1;
  }

  insertFirst(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  insertLast(value) {
    const node = new Node(value);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
    return true;
  }

  deleteLast() {
    let current = this.head;
    while (current.next) {
      if (!current.next.next) {
        current.next = null;
      } else current = current.next;
    }
    this.length--;
    return true;
  }

  addNode(value, i) {
    if (i >= 0 && i > this.length) {
      return false;
    }
    if (i === 0) {
      return;
    }
    if (i === undefined) {
      this.insertLast(value);
      return true;
    }
    const node = new Node(value);
    let current; let
      previous;
    current = this.head;
    let count = 0;
    while (count < i) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.length++;
    return true;
  }

  removeNode(i) {
    if (i > 0 && i >= this.length) {
      return false;
    }
    if (i === undefined) {
      this.deleteLast();
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    while (count < i) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.length--;
    return true;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const list = new List({
  value: 'root',
  next: null,
});
// list.addNode(1, 0);
list.addNode(100, 1);
list.addNode(101, 2);
list.addNode(102, 3);
// list.addNode(122);
// console.log(list.print());
console.log(JSON.stringify(list));
list.removeNode();
console.log(JSON.stringify(list));

// list.removeNode( 2);
// console.log(JSON.stringify(list));
console.log(list.print());

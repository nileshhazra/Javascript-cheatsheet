class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    var node = new Node(data);

    var current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  printlist() {
    var current;
    current = this.head;
    while (current.head) {
      console.log(current.data);
      current = current.next;
    }
  }
}

var ll = new LinkedList();
ll.add(10);
ll.printlist();

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    get tail() {
        let currentNode = this.head;
        if (!currentNode) {
            return null;
        }
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    get size() {
        let size = 0;
        let currentNode = this.head;
        while (currentNode) {
            currentNode = currentNode.nextNode;
            size++;
        }
        return size;
    }

    append(value) {
        const node = new Node(value);
        if (this.head) {
            this.tail.nextNode = node;
        } else {
            this.head = node;
        }
    }

    prepend(value) {
        const node = new Node(value);
        if (this.head) {
            node.nextNode = this.head;
        }
        this.head = node;
    }

    at(index) {
        let currentNode = this.head;
        if (index < 0 || index > this.size - 1) {
            return null;
        }
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        if (!this.head) {
            return null;
        }
        if (!this.head.nextNode) {
            const node = this.head;
            this.head = null;
            return node;
        }
        let currentNode = this.head;
        while (currentNode.nextNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        const node = currentNode.nextNode;
        currentNode.nextNode = null;
        return node;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value == value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value == value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let string = '';
        let currentNode = this.head;
        while (currentNode) {
            string += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        string += 'null';
        return string;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            console.log('incorrect index value');
            return null;
        }
        if (index == 0) {
            this.prepend(value);
        }
        const prevNode = this.at(index - 1);
        const node = new Node(value, prevNode.nextNode);
        prevNode.nextNode = node;
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        if (index == 0) {
            const removedNode = this.head;
            this.head = this.head.nextNode;
            return removedNode
        }
        const prevNode = this.at(index - 1);
        const removedNode = prevNode.nextNode;
        prevNode.nextNode = removedNode.nextNode;
        return removedNode;
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.tail);
console.log(list.size);
console.log(list.at(3));
console.log(list.pop());
console.log(list.contains("dog"));
console.log(list.find("hamster"));
console.log(list.toString());
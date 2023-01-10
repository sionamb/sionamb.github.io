const cards = document.getElementsByClassName("card")

console.log(cards)

class Node {
    // Constructor to create a new node
    // next and prev is by default initialized as null
    constructor(val) {
        this.data = val;
        this.prev = null;
        this.next = null;
    }
}

function createLinkedList(){
    for(let i = 0; i < cards.length; i++){
        //value
        let newNode = new Node(cards[i])
    
        //prev
        if(i = 0)
            newNode.prev = cards[cards.length]
        else
            newNode.prev = cards[i - 1]
        //next
        if(i = cards.length)
            newNode.next = cards[0]
        else
            newNode.next = cards[i + 1]
    }
}

const cards = document.getElementsByClassName("card")

console.log(cards)
console.log(cards.length)

createLinkedList()

function createLinkedList(){
    class DoublyLinkedList {
        constructor() {
            this.nodes = [];
        }
      
        get size() {
            return this.nodes.length;
        }
      
        get head() {
            return this.size ? this.nodes[0] : null;
        }
      
        get tail() {
            return this.size ? this.nodes[this.size - 1] : null;
        }

        insertAt(index, value) {
            const previousNode = this.nodes[index - 1] || null;
            const nextNode = this.nodes[index] || null;
            const node = { value, next: nextNode, previous: previousNode };
        
            if (previousNode) previousNode.next = node;
            if (nextNode) nextNode.previous = node;
            this.nodes.splice(index, 0, node);
        }
        insertLast(value) {
            this.insertAt(this.size, value);
        }
    }

    const list = new DoublyLinkedList();
    for(let i = 0; i < cards.length; i++){
        list.insertLast(cards[i])
        console.log(cards[i])
    }

    console.log(list)

    displayFirst(list)
}

function displayFirst(list){
    console.log(list.nodes[0].value)
    list.nodes[0].value.style.display = "block"
    list.nodes[0].next.value.style.display = "block"
}

cards[i].addEventListener("click", e=>{
    
})
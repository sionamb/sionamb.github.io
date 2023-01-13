const cards = document.getElementsByClassName("card")

console.log(cards)
console.log(cards.length)

let currentIndex = 0
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
    //make the doubly linked list circular
    list.head.previous = list.tail
    list.tail.next = list.head
    console.log(list)

    displayFirst(list)

    const prevBtn = document.getElementById("previous")
    prevBtn.addEventListener("click", (e) =>{
        prev(list)
    })

    const nextBtn = document.getElementById("next")
    nextBtn.addEventListener("click", (e) =>{
        next(list)
    })

}

function displayFirst(list){
    let projectsList = document.querySelector(".projectsList")
    console.log("edge")
    list.nodes[currentIndex].previous.value.style.display = "block"
    //current
    let cloneCard1 = document.querySelector(".card1").cloneNode(true)
    cloneCard1.style.display = "block"
    console.log(cloneCard1)
    projectsList.appendChild(cloneCard1)
    //next
    let cloneCard2 = document.querySelector(".card2").cloneNode(true)
    cloneCard2.style.display = "block"
    console.log(cloneCard2)
    projectsList.appendChild(cloneCard2)
}

function prev(list){
    //remove current cards
    removeCards()

    console.log(currentIndex)

    currentIndex--
    console.log(currentIndex)

    if(currentIndex < 0){
        currentIndex = list.size - 1
    }

    let projectsList = document.querySelector(".projectsList")
    console.log(projectsList)

    if(currentIndex === 6){
        console.log("edge")
        list.nodes[currentIndex].previous.value.style.display = "block"
        list.nodes[currentIndex].value.style.display = "block"
        //next
        let cloneCard1 = document.querySelector(".card1").cloneNode(true)
        cloneCard1.style.display = "block"
        console.log(cloneCard1)
        projectsList.appendChild(cloneCard1)
    }
    else if(currentIndex === 0){
        console.log("edge")
        list.nodes[currentIndex].previous.value.style.display = "block"
        //current
        let cloneCard1 = document.querySelector(".card1").cloneNode(true)
        cloneCard1.style.display = "block"
        console.log(cloneCard1)
        projectsList.appendChild(cloneCard1)
        //next
        let cloneCard2 = document.querySelector(".card2").cloneNode(true)
        cloneCard2.style.display = "block"
        console.log(cloneCard2)
        projectsList.appendChild(cloneCard2)
    }
    else{
        console.log(currentIndex)
        console.log(list.nodes[currentIndex].value)
        list.nodes[currentIndex].previous.value.style.display = "block"
        list.nodes[currentIndex].value.style.display = "block"
        list.nodes[currentIndex].next.value.style.display = "block"
    }
    
}

function next(list){
    //remove current cards
    removeCards()

    console.log(currentIndex)

    currentIndex++
    console.log(currentIndex)


    if(currentIndex > list.size - 1){
        currentIndex = 0
    }


    let projectsList = document.querySelector(".projectsList")
    console.log(projectsList)

    if(currentIndex === 6){
        console.log("edge")
        list.nodes[currentIndex].previous.value.style.display = "block"
        list.nodes[currentIndex].value.style.display = "block"
        //next
        let cloneCard1 = document.querySelector(".card1").cloneNode(true)
        cloneCard1.style.display = "block"
        console.log(cloneCard1)
        projectsList.appendChild(cloneCard1)
    }
    else if(currentIndex === 0){
        console.log("edge")
        list.nodes[currentIndex].previous.value.style.display = "block"
        //current
        let cloneCard1 = document.querySelector(".card1").cloneNode(true)
        cloneCard1.style.display = "block"
        console.log(cloneCard1)
        projectsList.appendChild(cloneCard1)
        //next
        let cloneCard2 = document.querySelector(".card2").cloneNode(true)
        cloneCard2.style.display = "block"
        console.log(cloneCard2)
        projectsList.appendChild(cloneCard2)
    }
    else{
        console.log(currentIndex)
        console.log(list.nodes[currentIndex].value)
        list.nodes[currentIndex].previous.value.style.display = "block"
        list.nodes[currentIndex].value.style.display = "block"
        list.nodes[currentIndex].next.value.style.display = "block"
    }
}

function removeCards(){
    for(i = 0; i < cards.length; i++){
        cards[i].style.display = "none"
    }
}
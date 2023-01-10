//Drop down the current accordion element

//variable to hold accordion elements
let accordion = document.getElementsByClassName("accordion");
console.log(accordion)

// let description = document.getElementsByClassName("panel")

//iterate through each element and drop down the active one 
for (let i = 0; i < accordion.length; i++) {
    //add click event listeners to each accordion element
    accordion[i].addEventListener("click", function() {
        //make sure no sections are actively dropped down 
        for(let j = 0; j < accordion.length; j++){
            //ensure the active class is removed from all accordion elements
            accordion[j].classList.remove("active")
            //variable to hold the description for an accordion element
            let description = accordion[j].nextElementSibling
            //ensure the description is not displayed 
            if(description.style.display === "block")
                description.style.display = "none"
        }
        //add the active class to the clicked accordion section 
        this.classList.toggle("active")
        //variable to hold the description section
        let panel = this.nextElementSibling
        //display the current description section
        panel.style.display = "block"
    })
}
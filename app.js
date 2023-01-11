//Drop down the current accordion element

//variable to hold accordion elements
const accordion = document.getElementsByClassName("accordion")

//have the first description displayed on load
function dropDown(){
    //variable to hold the description of the first accordion element
    let description = accordion[0].nextElementSibling
    //display the description
    description.style.display = "block"
}

//iterate through each element and drop down the active one 
for (let i = 0; i < accordion.length; i++) {
    //add click event listeners to each accordion element
    accordion[i].addEventListener("click", function() {
        //make sure no sections are actively dropped down 
        for(let j = 0; j < accordion.length; j++){
            //variable to hold the description section for an accordion element 
            let description = accordion[j].nextElementSibling

            //find the current active element
            if(accordion[j].classList.contains("active")){
                //if the clicked element is not the same as the current active element, remove the active class 
                //so no elements are active 
                if(this.id !== accordion[j].id)
                    accordion[j].classList.remove("active")
            }
            if(description.style.display === "block")
                description.style.display = "none"
        }
        //toggle the active class to the clicked accordion section 
        this.classList.toggle("active")

        //display the description for the active accordion element 
        if(this.classList.contains("active")){
            //variable to hold the description section
            let panel = this.nextElementSibling
            //display the current description section
            panel.style.display = "block"
        }  
    })
}
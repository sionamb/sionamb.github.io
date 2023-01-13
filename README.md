# sionamb.github.io - Portfolio Website

## JavaScript Elements:
  ### Accordion (app.js): <em>An accordion element that drops down or raises up a section when clicked</em>
 
  - Starts off with the first section dropped down:
```
function dropDown(){
    let description = accordion[0].nextElementSibling
    description.style.display = "block"
}
```
  - Drop down the clicked section unless the element clicked is the already dropped down section, in which case it raises it back up 
```
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        for(let j = 0; j < accordion.length; j++){
            let description = accordion[j].nextElementSibling
            if(accordion[j].classList.contains("active")){
                if(this.id !== accordion[j].id)
                    accordion[j].classList.remove("active")
            }
            if(description.style.display === "block")
                description.style.display = "none"
        }
        this.classList.toggle("active")
        if(this.classList.contains("active")){
            let panel = this.nextElementSibling
            panel.style.display = "block"
        }  
    })
}
```
### Carousel (carousel.js): <em>A card carousel that iterates through the cards when the left and right arrows are clicked using a doubly linked list</em>
```

```
  
  
  
## Credits:
- Icons: <a href = "https://thenounproject.com/">The Noun Project</a>
- Various Cards & Buttons: <a href = "https://uiverse.io/cards">Universe.io</a>
- Shading Effects: <a href = "https://neumorphism.io/#e0e0e0">Neumorphism</a>
- Background Effect: <a href = "https://codepen.io/Huhtamaki/pen/GPzwPY">@Huhtamaki on <a>
- Glitch Effect: <a href = "https://codepen.io/cbanlawi/pen/xxRBeMY">@cbanlawi on CodePen<a>

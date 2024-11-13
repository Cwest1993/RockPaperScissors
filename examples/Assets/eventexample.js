var head = document.getElementById("typeHead")
// connected variable "head" to H2 with ID "typeHead" on the html page events
document.onkeydown = function(event){
    head.innerText=event.key
    // variable.returns values for text = property that provides value of key pressed
}
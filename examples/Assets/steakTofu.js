var likeSteak = confirm("Do you like steak?")
var birthYear = prompt("When were you born?")

if (likeSteak){
    document.write("Here's a Steak Sandwich!")
}
else{
    document.write("Here's a Tofu Stir-Fry!")
}
if(birthYear>=2004){
    alert("No Sake for you!")
}
else{
    alert("Nice, have a shot!")
}
var bands = ["linkin park", "sum 41", "disturbed", "maroon 5", "queen"];
// leaving all the items in the array as lower case so they match the .tolowercase
var favBand = prompt("Who's your favorite band?").toLowerCase();




if(bands.indexOf(favBand)===-1){
    alert("Nah. They're pretty lame.")
}
// started with the singling out the negative statement first for the if else statement
else{
    alert("YEAH I LOVE THEM!!!!")
}

for(var i = 0;i<bands.length; i++){
// create variable (i), connect variable to array in relevant way, tell which direction to go up/down (++/--)
    console.log(bands[i]);
    // console.log(array[variable])
}

for(var l = 0;l<5; l++){
    console.log("I am " + l)
}
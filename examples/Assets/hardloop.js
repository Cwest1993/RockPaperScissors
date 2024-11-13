var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

for(var i = 0;i<myFarm.length; i++){
    if(myFarm[i].charAt(0)==="c"||myFarm[i].charAt(0)==="o"){
        alert("Starts with 'c' or 'o'!")
        console.log(myFarm[i])
    }
}

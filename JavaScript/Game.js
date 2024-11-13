var userPick = null
var cpuChoice = null
var cpuArray = ["r", "p", "s"]
var rpsW = 0
var rpsL = 0
var rpsT = 0 

function rpsLogic(){
    if((userPick==="r"&&cpuChoice==="s")||(userPick==="s"&&cpuChoice==="p")||(userPick==="p"&&cpuChoice==="r")){
        rpsW++ 
        var win = document.getElementById("rpsWins")
        win.innerText="You've won: "+rpsW+" times!"
    }
    else if((userPick==="r"&&cpuChoice==="r")||(userPick==="s"&&cpuChoice==="s")||(userPick==="p"&&cpuChoice==="p")){
        rpsT++
        var tie = document.getElementById("rpsTies")
        tie.innerText="You've tied: "+rpsT+" times!"
    }
    else{
        rpsL++
        var loss = document.getElementById("rpsLoss")
        loss.innerText="You've lost: "+rpsL+" times!"
    }
}

function cpuPick(){
    cpuChoice = cpuArray[Math.floor(Math.random()*cpuArray.length)]
    var comp = document.getElementById("computer")
    comp.innerText="The computer chose: "+cpuChoice
} 

document.onkeydown = function(){
    var key = event.key

    if(key==="r"||key==="p"||key==="s"){
        userPick = key
        var you = document.getElementById("player")
        you.innerText="You chose: "+userPick
        cpuPick()
        rpsLogic()

    }
    else{
      alert("Please press R P or S")
    }
}


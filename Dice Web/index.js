var num1 = Math.floor(Math.random()*6) + 1
var num2 = Math.floor(Math.random()*6) + 1

var player1 = `./images/dice${num1}.png`
var player2 = `./images/dice${num2}.png`

document.querySelectorAll("img")[0].setAttribute("src",player1)
document.querySelectorAll("img")[1].setAttribute("src",player2)

if(num1>num2){
    document.querySelector("h1").textContent = "Player1 Wins"
}
else if (num2>num1) {
    document.querySelector("h1").textContent = "Player2 Wins"
    
}

else{
    document.querySelector("h1").textContent = "Draw"
}
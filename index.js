let input1 = document.getElementById("score1")
let input2 = document.getElementById("score2")

findGreater()

function findGreater(){
    let score1 = input1.textContent
    let score2 = input2.textContent
    
    if(score1>score2){
        input1.classList.add("leader");
        input2.classList.remove("leader");
    }else if(score2>score1){
        input1.classList.remove("leader");
        input2.classList.add("leader");
    }else{
        input1.classList.add("leader");
        input2.classList.add("leader");
    }
}

function increment1(num){
    let score = Number(input1.textContent)
    score+=num;
    input1.textContent = score;
    
    findGreater();
}

function increment2(num){
    let score = Number(input2.textContent)
    score+=num;
    input2.textContent = score;
    
    findGreater();
}

let countTimer = 5000;
const timer = setInterval(()=>{
    let minutes = Math.floor((countTimer % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countTimer % (1000 * 60)) / 1000);

    document.getElementById("mins").textContent = minutes+":";
    document.getElementById("secs").textContent = seconds;

    if(countTimer<0){
        document.getElementById("mins").textContent = "";
        document.getElementById("secs").textContent = "";
        document.getElementById("end").textContent = "Times Up!";
    }
    
    countTimer-=1000;
},1000)

function reset(){
    input1.textContent = 0;
    input2.textContent = 0;
    countTimer = 5000;
    document.getElementById("end").textContent = "";
}


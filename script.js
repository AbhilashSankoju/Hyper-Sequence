let userInput=[]
let machine=[]
let b=["red","green","yellow","blue"]
let level=1
let box=document.querySelectorAll(".box");
let body=document.querySelector("body")
let h2=document.querySelector("h2")
let gameState=false;
let maxScore=0
let user=false
cscore=document.querySelector(".cscore")
hscore=document.querySelector(".hscore")
window.addEventListener("keypress",()=>{
    if(!gameState){
        blink_box();
    }
});


box.forEach(element => {
    element.addEventListener("click",(e)=>{
        if(gameState && user){
        userInput.push(e.target.id)
        e.target.classList.add("flash")
        setTimeout(()=>{
            e.target.classList.remove("flash")
        },250);
        check_last(userInput,machine);
        console.log(userInput)
        }
    })
        
});


function blink_box(){
    gameState=true;
    let n= randgenerator();
   let c=b[n];
   let color=document.querySelector(`#${c}`);
   machine.push(c);
    h2.innerText=`Level is ${level}`

   playSequence();
}

function randgenerator(){
    return Math.floor(Math.random()*4);
}


function check(u,m){
    if(JSON.stringify(u)===JSON.stringify(m)){
        userInput=[];
        level++;
        setTimeout(()=>{
            blink_box()
        },1000)
        maxScore=Math.max(maxScore,level-1)
        user=false

    }
    else{
        reset()
        user=false
    }
    
}

check_last=(u,m)=>{
    for(let i=0;i<u.length;i++){
        if(u[i]!==m[i]){
            console.log("stop")
            alertMessage()
            reset()
            return;
        }
    }
    if(u.length==m.length){
        check(u,m);
    }

}

alertMessage=()=>{
    body.classList.add("alert")
    h2.innerText="Game Over, Press any key to Restart"
    cscore.querySelector("h2").innerText=`Current Score: ${level-1}`
    hscore.querySelector("h2").innerText=`Highest Score: ${maxScore}`
    setTimeout(()=>{
        body.classList.remove("alert")
    },2000)
}

reset=()=>{
    gameState=false;
    userInput=[]
    machine=[]
    level=1
    console.log("reset")
}

playSequence=()=>{
    user=false
    machine.forEach((color,index)=>{
        let k=document.querySelector(`#${color}`)
        setTimeout(()=>{    
        k.classList.add("flash")
        setTimeout(()=>{
            k.classList.remove("flash")
        },300)        
        },index*600)
    });
    setTimeout(()=>{
        user=true
        },machine.length*600);
        console.log(machine)

}
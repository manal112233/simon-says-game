let gameSeg=[];
let userSeg=[];
let btns=["yellow","red","green","purple"];
let level=0;
let start=false;
let h2=document.querySelector("h2");

addEventListener("keypress",startGame);

 function startGame(){
if( start==false){
   start=true;
    gameSeg=[];
    userSeg=[];
    nextSeq();
}
 };
 function nextSeq(){
    level++;
    console.log(`you are now ${level}`)
    h2.innerText=`level ${level}`;
    userSeg=[];
    let randomColor=btns[Math.floor(Math.random()*4)];
    console.log(randomColor);
    gameSeg.push(randomColor);
    
    gameSeg.forEach((color,index)=>{
        setTimeout(()=>{
            flashColor(color);},1000*(index+1));
        })
    };
    function flashColor(color){
        const button=document.getElementById(color);
        const originalColor=button.style.backgroundColor;
        button.style.backgroundColor="white";
        setTimeout(() => {
            button.style.backgroundColor=originalColor;
        }, 400);
    };
    btns.forEach(color => {
        const butt = document.getElementById(color);
        butt.addEventListener("click", userTurn);
        console.log(`${color} button added`);
    });
   function userTurn(event){
    const userChoice=event.target.id;
    userSeg.push(userChoice);
    console.log(userSeg);
    flashColor(userChoice);
    checkAns(userSeg.length-1);
   };
function checkAns(currentlevel){
console.log("current level:" ,level);
let indx=level-1;
if(userSeg[indx]==gameSeg[indx]){
    if(userSeg.length==gameSeg.length){
        nextSeq();
    }
}else{console.log("game over")
    h2.innerText="game over!,press any key to restart";
    start=false;
};
}
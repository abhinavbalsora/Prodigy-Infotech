let buttons = document.querySelectorAll(".btn");
let reset_btn = document.querySelector("#reset-btn");
let new_btn = document.querySelector("#new-btn");
let msg_con = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],           //wining patterns
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];


buttons.forEach( (btn)=>{
     btn.addEventListener( "click" , () =>{
      console.log("CLICKED");
     if(turn0 === true){
        btn.innerHTML = "O"; 
    
          btn.style.color="blue";
        turn0 = false;
       }  
       else{
        btn.innerHTML="X";
        btn.style.color="red";

        turn0 = true;
       }
       btn.disabled = true;
       count++;

       let isWinner = chkWinner();
   
       if (count === 9 && !isWinner) {
         Draw();
       }
       
       

      })
}

)

const disableBtn = () =>{
  for (let btns of buttons) {
                                     // buttons disabled function 
  btns.disabled = true;
  }
}


const Reset_game =()=>{
  turn0 = true;
  count = 0;           //reset game
  Enable_btn();
msg_con.classList.add("hide");
}

const Enable_btn=()=>{
for(let btns of buttons){
  btns.disabled = false;     //enable buttons
  btns.innerHTML="";
}

}

const Draw=()=>{
    msg.innerHTML="The Game Is Draw" ;
  msg_con.classList.remove("hide");     // draw
  disableBtn();
}


const showWinner=(winner)=>{
 msg.innerHTML=`Congratulations, Winner is ${winner}`;
 msg_con.classList.remove("hide");        //to show the winner

 disableBtn();

}





const chkWinner =() => {

  for(let patterns of winPatterns){
let pat1 = buttons[patterns[0]].innerHTML;
let pat2 = buttons[patterns[1]].innerHTML;
let pat3 = buttons[patterns[2]].innerHTML;      // check winner

 if(pat1 != "" && pat2 != "" && pat3 !=""){
  if(pat1 == pat2 && pat2 == pat3){
    console.log("Winner",pat1);
    showWinner(pat1);

  }

 }
  }
  

};

reset_btn.addEventListener("click",Reset_game);
new_btn.addEventListener("click",Reset_game);


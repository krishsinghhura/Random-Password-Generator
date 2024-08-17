let box=document.querySelector("textarea");
let arr=[];
let btn=document.querySelector(".btn");


function generate(){
    let s="jhgdqdwgea";
    arr[0]=Math.floor(Math.random()*10);
    arr[1]=s.charAt(arr[0]);
    arr[2]=Math.floor(Math.random()*10);
    arr[3]=s.charAt(arr[2]);
    arr[4]=Math.floor(Math.random()*10);
    arr[5]=s.charAt(arr[4]);
    arr[6]=Math.floor(Math.random()*10);
    arr[7]=s.charAt(arr[6]);
    arr[8]=Math.floor(Math.random()*10);
    arr[9]=s.charAt(arr[8]);
    let final="";
    for(let i=0;i<=arr.length-1;i++){
        final=final+arr[i];
    }
    box.innerText=final;
}



let copy=document.querySelector(".hover");
let arrow=document.querySelector(".arrow");
function over(){
    copy.setAttribute("id","hover");
    arrow.setAttribute("id","arrow");
    copy.innerText="Click to copy";
    arrow.innerHTML='<i class="fa-solid fa-arrow-down"></i>';
}
let ii=document.querySelector(".inputBox i");
ii.addEventListener("mouseover",over);
ii.addEventListener("mouseout",afterOver);

function afterOver(){
    copy.setAttribute("id","hove");
    arrow.setAttribute("id","arro");
    copy.innerText="";
    arrow.innerHTML='';
}

let txt=document.querySelector(".input");
function copyTxt(){
    txt.select();
    document.execCommand("copy");
}
ii.addEventListener("click",copyTxt);

btn.addEventListener("click",generate);

//learned how to copy the txt in clipboard, rather than this did everything by myself
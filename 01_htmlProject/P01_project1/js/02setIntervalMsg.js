// const footer= document.querySelector('.strMsg');
// const intervalID=setInterval(function(){
//     footer.textContent=`Get Your ${Date()} website free`;
//     console.log(`Get Your ${Date()} website free`);
// },2000)


// const btnClose = document.getElementsByClassName("close")
// addEventListener('click',function(e){
//     clearInterval(intervalID);
//     console.log("stop")
// })


const btn = document.querySelector('.btn');
const strColor ="0123456789ABCDEF";

let nameColor;

const strColorName = function () {
    nameColor="#";
    for (let i=0; i<6; i++){
        nameColor += strColor[Math.floor(Math.random()*16)];
    };
    return nameColor;
};

let intervalID;

const startFun = function(){
 intervalID=setInterval(function(){
    btn.style.backgroundColor=strColorName();
    console.log(strColorName());
},2000);
};

btn.addEventListener('click',function(e){
    clearInterval(intervalID);
    console.log("Stop")
   
})

startFun()









const strName = document.querySelector('.myName');
const strRole = document.querySelector('.myRole');
const btnStop = document.querySelector('.stop');
const navBar= document.querySelector('.header');

strName.innerHTML="Shivkumar Kadam"
strRole.textContent="I am a Web Developer"

// const id= setTimeout(function(){
//     console.log("Value Change");
// },3000)

// btnStop.addEventListener('click',(e)=>{
//     clearTimeout(id);
//     console.log("Value not Change");
// });


// setTimeout(function(){
// console.log(" timeUp");
// },3000);


// console.log("hi")

const funScrolled = function(){
    if(window.scrollY > 100){
        if (navBar.classList.contains('.header-style-onScroll')){
             
            
        }else{
            navBar.classList.add('header-style-onScroll');

        }
        console.log(navBar.classList);

    }else {
        navBar.classList.remove('header-style-onScroll');
    }
};

window.addEventListener('scroll', funScrolled);
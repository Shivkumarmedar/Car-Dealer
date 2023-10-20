let menubar=document.querySelector('#menubar');
let navbar=document.querySelector('.navbar');

menubar.onclick=()=>{
    menubar.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

window.onscroll=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
    menubar.classList.remove('fa-xmark');
    navbar.classList.remove('active')
}

window.onload=()=>{
    if(window.scrollY >0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
}

document.querySelector('#login-btn').onclick=()=>{
    document.querySelector('.login-from-container').classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick=()=>{
    document.querySelector('.login-from-container').classList.remove('active');
}

document.querySelector('.home').onmousemove=(e)=>{
    document.querySelectorAll('.home-parallax').forEach(element =>{
        let speed=element.getAttribute('data-speed');

        let x=(window.innerWidth-e.pageX * speed)/90;
        let y=(window.innerHeight-e.pageY * speed)/90;

        element.style.transform = `translateX(${y}px) translateY(${x}px)`
    })
}

document.querySelector('.home').onmouseleave=(e)=>{
    document.querySelectorAll('.home-parallax').forEach(element =>{
    
        element.style.transform = `translateX(0px) translateY(0px)`
    })
}

let wrapper=document.querySelector('.wrapper-box');
let activeBox=wrapper.querySelectorAll('.box');
let activeLable=document.querySelector('.activeCircle').querySelectorAll('.fa-circle');
let nextBtn=document.querySelector('#nextBtn');
let preBtn=document.querySelector('#preBtn');

let indexNo=0;

nextBtn.onclick=()=>{
    indexNo++;
    changeBox();
}
preBtn.onclick=()=>{
    indexNo--;
    changeBox();
}
let changeBox=()=>{
    if (indexNo>activeBox.length-1){
        indexNo=0;
    }
    else if (indexNo < 0){
        indexNo = activeBox.length-1;
    }
    for(let i=0;i<activeBox.length;i++){
        if (i===indexNo){
            activeBox[i].classList.add('active');
            activeLable[i].classList.add('fa-solid');
            wrapper.style.transform=`translateX(${indexNo*-250}px)`;
        }
        else{
            activeBox[i].classList.remove('active');
            activeLable[i].classList.remove('fa-solid');
        }
    }
}




let fwrapper=document.querySelector('.Featured-wrapper-box');
let FactBox=wrapper.querySelectorAll('.box2');
let FactLable=document.querySelector('.FactCircle').querySelectorAll('.fa-circle');
let fNxtBtn=document.querySelector('#fNextBtn');
let fPreBtn=document.querySelector('#fPreBtn');
let fIndexNo=0;
fNxtBtn.onclick=()=>{
    fIndexNo++;
    fChangeBox();
}
fPreBtn.onclick=()=>{
    fIndexNo--;
    fChangeBox();
}
let fChangeBox=()=>{
   
    if (fIndexNo>FactBox.length-1){
        fIndexNo=0;
    }
    else if (fIndexNo < 0){
        fIndexNo = FactBox.length-1;
    }
    for(let i=0;i<FactBox.length;i++){
        if (i== fIndexNo){
            FactBox[i].classList.add('active');
            FactLable[i].classList.add('fa-solid');

            fwrapper.style.transform=`translateX(${fIndexNo*-21}vw)`;
        }
        else{
            FactBox[i].classList.remove('active');
            FactLable[i].classList.remove('fa-solid');
        }
    }
}
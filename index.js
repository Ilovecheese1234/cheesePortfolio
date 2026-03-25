const topBar = document.getElementById("topBar");
const detectArea = document.getElementById("detectArea");
const cheeseCursor = document.getElementById("cheeseCursor");
const body = document.getElementById("body");
const progressName = document.getElementsByClassName("progressName");
const bar = document.getElementsByClassName("bar");

const cheesePic = document.getElementById("cheesePic");
const leftBackdrop = document.getElementById("leftBackdrop");
const rightBackdrop = document.getElementById("rightBackdrop");
const enhanceMyFace = document.getElementById("enhanceMyFace");
const faceLeave = document.getElementById("faceLeave");
const main = document.getElementById("main");

const projectsMain = document.querySelectorAll(".projectsMain")
const myProject = document.querySelectorAll(".myProject")
const loadMore = document.getElementById("loadMore");
const footer = document.getElementById("footer");
const movingCursor1 = document.getElementById("movingCursor1");
const movingCursor2 = document.getElementById("movingCursor2");
const item = document.querySelectorAll(".item"); 
const icon = document.querySelectorAll(".icon");

const buttonFooter = document.querySelectorAll(".buttonFooter");
const screenSizeIncompatible = document.getElementById("screenSizeIncompatible");
if(window.innerWidth / window.innerHeight > 2.3 || window.innerHeight / window.innerWidth > 1 && window.innerWidth > 450){
        screenSizeIncompatible.style.opacity = "1";
        screenSizeIncompatible.style.zIndex = "100000";

        for(var i = 0 ;i<body.children.length;i++){
            if(i!=0){
                body.children[i].style.opacity = "0";
                body.children[i].style.zIndex = "-100";
            }
            
        }
    }
window.addEventListener("resize",()=>{
    if(window.innerWidth / window.innerHeight > 2.3 || window.innerHeight / window.innerWidth > 1 && window.innerWidth > 450){
        screenSizeIncompatible.style.opacity = "1";
        screenSizeIncompatible.style.zIndex = "100000";
        for(var i = 0 ;i<body.children.length;i++){
            if(i!=0){
                body.children[i].style.opacity = "0";
                body.children[i].style.zIndex = "-100";
            }
            
        }
    }
    else{
         screenSizeIncompatible.style.opacity = "0";
        screenSizeIncompatible.style.zIndex = "-100000";
         for(var i = 0 ;i<body.children.length;i++){
            if(i!=0 && i!=5 && i!=1){
                //zIndex [topBar]>[cheeseCursor]>[detectArea]>everything else
                body.children[i].style.opacity = "1";
                body.children[i].style.zIndex = "100";
            }
            
            body.children[3].style.zIndex = "1000";
            body.children[1].style.zIndex = "102";
            body.children[2].style.zIndex = "101";
        }
    }
})


icon.forEach((element,index,arr) => {
    element.addEventListener("mouseover",(e)=>{
        let left = arr[index - 1] || null;
        let right = arr[index + 1] || null;

        element.style.transform = "scale(150%) translateY(-10%) ";
        element.style.backgroundColor = "#888888";
        if(left!=null){
            console.log(1);
            left.style.transform = `scale(130%)`;
        }
        if(right!=null){
            right.style.transform = `scale(130%)`;
        }
        
        

    })
    element.addEventListener("mouseleave",(e)=>{
       element.style.transform = "scale(100%) translateY(0%)" ;
         element.style.animation = "zoomIn 0.1s linear forwards";
         element.style.backgroundColor = "#444444";
        let left = arr[index - 1] || null;
        let right = arr[index + 1] || null;
          if(left!=null){
            console.log(1);
            left.style.transform = `scale(100%)`;
        }
        if(right!=null){
            right.style.transform = `scale(100%)`;
        }
    }

    )
});
let text = [];
function language(index){

    if(index==0){
        text = ["Beginner","Developing","Fluent","Native"];
    }
    if(index==1){
        text = ["初學","開發中","流暢","母語"];
    }
}




let angle = 0;
if(window.innerWidth<700){
    setInterval(()=>{
    angle++;
    let setDet1X = 30 * Math.sin(angle*Math.PI/180)+100;
    let setDet1Y = 30 * Math.cos(angle*Math.PI/180)+100;
    let setDet2X = 40 * Math.sin(angle*Math.PI/180+5*Math.PI/4)+window.innerWidth*0.5;
    let setDet2Y = 40 * Math.cos(angle * Math.PI/180+5*Math.PI/4)+window.innerHeight*0.4;

    
    movingCursor1.style.top = `${setDet1Y}px`;
    movingCursor1.style.left = `${setDet1X}px`;
    movingCursor2.style.top = `${setDet2Y}px`;
    movingCursor2.style.left = `${setDet2X}px`;
},30)
}
else{
     setInterval(()=>{
    angle++;
    let setDet1X = 30 * Math.sin(angle*Math.PI/180)+window.innerWidth*0.2;
    let setDet1Y = 30 * Math.cos(angle*Math.PI/180)+window.innerHeight*0.3;
    let setDet2X = 50 * Math.sin(angle*Math.PI/180+5*Math.PI/4)+window.innerWidth*0.7;
    let setDet2Y = 50 * Math.cos(angle * Math.PI/180+5*Math.PI/4)+window.innerHeight*0.75;

    
    movingCursor1.style.top = `${setDet1Y}px`;
    movingCursor1.style.left = `${setDet1X}px`;
    movingCursor2.style.top = `${setDet2Y}px`;
    movingCursor2.style.left = `${setDet2X}px`;
},30)
}


let load = 0; 
let textSel = 0;

var loadLangBar = setInterval(()=>{
    load++
    if(load<75){
        for(i = 0;i<3;i++){
             bar[i].style.width = `${load}%`;
        }
         if(load%25==0){
            textSel++;
             for(i = 0;i<3;i++){
                 progressName[i].textContent = text[textSel];
            }
         }
        for(i = 0;i<3;i++){
             progressName[i].style.left = `${load*0.7}%`;
        }
    }
    if(load>=75 && load<100){
        bar[0].style.width = `${load}%`;
        if(load%25==20){
            textSel++;
            progressName[0].textContent = text[textSel];
        }
         progressName[0].style.left = `${load*0.7}%`;
    }      
    if(load==100){
        clearInterval(loadLangBar);
    }},25)

window.addEventListener("mousemove",(e)=>{
        cheeseCursor.style.left = `${e.clientX}px`;
        cheeseCursor.style.top =`${e.clientY+window.scrollY}px`;
    })



detectArea.addEventListener("mouseover",(e)=>{
    topBar.style.top = "0%";
},100)    

topBar.addEventListener("mouseleave",(e)=>{
     topBar.style.top = "-20%";

})

let isClick=0;
function showCursor(){
    isClick++
    if(isClick%2==1){
        cheeseCursor.style.opacity =1;
        cheeseCursor.style.zIndex = 100;

    }
    else{
         cheeseCursor.style.opacity =0;
        cheeseCursor.style.zIndex = -100;
         body.style.cursor = "default";
    }

}

function loadMain(){
                item.forEach((element,index)=>{
                    element.style.transition = `ease-in-out 0.3s ${index*0.2}s `;
                    element.style.left = "0%";
                    element.style.right = "0%";
                    element.style.top = "0%";
                    element.style.bottom = "0%";
                    element.style.opacity = "1";
                    
                })
}
function loadProject(){
     projectsMain.forEach((element,index)=>{
                    element.style.transition = `ease-in-out 2s ${index*0.2}s `;
                    element.style.top = "0%";
                    element.style.opacity = "1";
    })
}
function loadFooter(){
     buttonFooter.forEach((element,index)=>{
                    element.style.left = "0%";
                    element.style.opacity = "1";
                    element.style.transition = `ease-in-out 0.9s ${index*0.5}s`;

                })
}
//This function activate intro animation after a specific viewpoint
let contactScreenY = window.innerHeight;

    window.addEventListener("scroll",(e)=>{
        e.preventDefault();
        let scrollY = this.scrollY;
        let percentage = (1.1*scrollY/contactScreenY)*100;

        if(window.innerWidth<450){
             if(percentage>=20 && percentage<=200){
                loadMain();
            }
            else if(percentage>200 && percentage<=320){
               loadProject();
            }
            else if(percentage>320){
                   loadFooter();
            }
        }
        else{
            if(percentage>=50 && percentage<=180){
                loadMain();
            }
            else if(percentage>180 && percentage<=280){
               loadProject();
            }
            else if(percentage>280){
                   loadFooter();
            }
        }
})


item.forEach((element)=>{
    element.addEventListener("mouseover",()=>{
         element.style.transition = `ease-in-out 0.3s`;
        element.style.backgroundColor = "#555555";
        element.style.transform = "scale(103%)";
    })
    element.addEventListener("mouseleave",()=>{
              element.style.transition = `ease-in-out 0.3s`;
        element.style.backgroundColor = "#222222";
        element.style.transform = "scale(100%)";
    })
})

projectsMain.forEach((element)=>{
    element.addEventListener("mouseover",()=>{
        element.style.transition = `ease-in-out 0.3s`;
        element.style.backgroundColor = "#444444";
    })
    element.addEventListener("mouseleave",()=>{
        element.style.transition = `ease-in-out 0.3s`;
        element.style.backgroundColor = "black";
    })
})

function scrollToProject(){
    window.scrollTo(0,document.getElementById("myProject").offsetTop);
}

loadMore.addEventListener("mouseenter",(e)=>{
  setPosition(e);
})

loadMore.addEventListener("mouseleave",(e)=>{
    loadMore.style.transition = "ease-in-out 0.2s";
    loadMore.style.left = `0%`;
    loadMore.style.bottom = `-2%`;
})

loadMore.addEventListener("mousemove",(e)=>{
    setPosition(e);
    console.log(1);
})

function setPosition(e){
    let offsetLeft = loadMore.offsetLeft;
    let width = loadMore.offsetWidth;
    let cursorLeft = e.clientX;

    let offsetTop = loadMore.offsetTop;
    let height = loadMore.offsetHeight;
    let cursorTop = e.clientY;

    

    let percentageX= (cursorLeft - offsetLeft - width/2)/cursorLeft * 10;
    let percentageY = (cursorTop - offsetTop - height/2) / cursorTop * 20;

    console.log(cursorTop,offsetTop);
    loadMore.style.transition = "linear 0.2s";
    loadMore.style.left = `${percentageX}%`;
    loadMore.style.bottom = `${percentageY}%`;
}

function redirect(index,lang){
    if(index==0 && lang==2){
        window.location.href= "index.html"
    }
    if(index==1 && lang == 2){
        window.location.href = "projectsEng.html";
    }
    if(index==2 && lang==2){
        window.location.href= "contactEng.html";
    }
}


function openApp(index){
    if(index==0){
        window.location.href = "https://web.whatsapp.com/";
    }
    if(index==1){
        window.location.href = "https://www.instagram.com/ilovecheese_3131/";
    }
    if(index==2){
        window.location.href = "https://github.com/Ilovecheese1234/";
    }
    if(index==3){
        window.location.href = "https://www.linkedin.com/in/chan-david-042994344/";
    }
}

cheesePic.addEventListener("mouseup",()=>{
    if(window.innerWidth>450){
        leftBackdrop.style.left = "0vw";
    rightBackdrop.style.right = "0vw";
    enhanceMyFace.style.zIndex = "10000";
    enhanceMyFace.style.opacity = "1";
    }
    
})





faceLeave.addEventListener("mouseup",()=>{
    leftBackdrop.style.left = "-100vw";
    rightBackdrop.style.right = "-100vw";
    
    enhanceMyFace.style.zIndex = "-10000";
    enhanceMyFace.style.opacity = "0";
})
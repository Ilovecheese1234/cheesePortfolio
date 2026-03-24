
const topBar = document.getElementById("topBar");
const detectArea = document.getElementById("detectArea");
const cheeseCursor = document.getElementById("cheeseCursor");
const input = document.querySelectorAll(".input");
const qText = document.querySelectorAll(".qText");
const question = document.querySelectorAll(".question");
const submit = document.getElementById("submit");
const buttonFooter = document.querySelectorAll(".buttonFooter");
const footer = document.getElementById("footer");
const mainTitle = document.getElementById("mainTitle");
const mainSubtitle = document.getElementById("mainSubtitle");
const quesContainer = document.querySelectorAll(".quesContainer");
const contactDetail = document.getElementById("contactDetail");
const warning = document.getElementById("warning");
const screenSizeIncompatible = document.getElementById("screenSizeIncompatible");
if(window.innerWidth / window.innerHeight > 2.3 || window.innerWidth>450 && window.innerHeight<300){
        screenSizeIncompatible.style.opacity = "1";
        screenSizeIncompatible.style.zIndex = "100000";

        for(var i = 0 ;i<body.children.length;i++){
            if(i!=0){
                body.children[i].style.opacity = "0";
            }
            
        }
    }
window.addEventListener("resize",()=>{
    if(window.innerWidth / window.innerHeight > 2.3 || window.innerWidth>450 && window.innerHeight<300){
        screenSizeIncompatible.style.opacity = "1";
        screenSizeIncompatible.style.zIndex = "10000000";
        for(var i = 0 ;i<body.children.length;i++){
            if(i!=0){
                body.children[i].style.opacity = "0";
                        
            }
            
        }
    }
    else{
         screenSizeIncompatible.style.opacity = "0";
        screenSizeIncompatible.style.zIndex = "-100000";
         for(var i = 0 ;i<body.children.length;i++){
            if(i!=0 && i!=1){
                body.children[i].style.opacity = "1";
                body.children[i].style.zIndex = "100";
            }
             body.children[3].style.zIndex = "1000";
            body.children[1].style.zIndex = "102";
            body.children[2].style.zIndex = "101";
            
        }
    }
})


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

window.addEventListener("mousemove",(e)=>{
        cheeseCursor.style.left = `${e.clientX}px`;
        cheeseCursor.style.top =`${e.clientY+window.scrollY}px`;
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

input.forEach((e,i)=>{
    e.addEventListener("keyup",()=>{
        qText[i].style.transition = "0.2s ease-in-out";
        question[i].style.transition = "0.2s ease-in-out";
        e.style.color = "cyan";
        if(input[i].value!=""){
            qText[i].style.color = "white";
            question[i].style.color = "white";
        }
        else{
            qText[i].style.color = "#777777";
             question[i].style.color = "#777777";
        }
       
    })
    let click = 0;
    e.addEventListener("mouseup",()=>{
        click++;
        if(click==1){
            input[i].value = "";
            qText[i].style.color = "#777777";
            question[i].style.color = "#777777";
        }

    })
})

submit.addEventListener("mouseover",()=>{
    for(i=0;i<4;i++){
        if(question[i].style.color == "rgb(119, 119, 119)" || question[i].style.color == ""){
            submit.style.left = `${Math.random()*window.innerWidth-window.innerWidth/1.5}px`;
             submit.style.top = `${Math.random()*100-50}px`;
             warning.style.opacity = 1;
        }
    }
})

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

window.addEventListener("scroll",(e)=>{
   let footerScrollPercentage = window.scrollY / footer.offsetTop * 100;
   if(footerScrollPercentage > 40 && footerScrollPercentage<100){
     buttonFooter.forEach((element,index)=>{
                element.style.left = "0%";
                element.style.opacity = "1";
                element.style.transition = `ease-in-out 0.9s ${index*0.5}s`;
     })
   }
})

mainTitle.onload=()=>{
    mainTitle.style.left = "0%";
    mainTitle.style.opacity = "1";
};

window.onload = function() {
    mainTitle.style.left = "0%";
    mainTitle.style.opacity = 1;
    mainSubtitle.style.left = "0%";
    mainSubtitle.style.opacity = 1;
    
    quesContainer.forEach((e,i)=>{
        e.style.transition = `0.5s ${i*0.2}s ease-in-out`;
        e.style.top = "0%";
        e.style.opacity = 1;
    })
    contactDetail.style.left = "0%";
    contactDetail.style.opacity = 1;
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
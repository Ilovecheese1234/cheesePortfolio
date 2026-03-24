const topBar = document.getElementById("topBar");
const detectArea = document.getElementById("detectArea");
const cheeseCursor = document.getElementById("cheeseCursor");
const cursorDesc = document.getElementById("cursorDesc");
var direct = document.querySelectorAll(".direct");
var projects = document.querySelectorAll(".projects");
const buttonFooter = document.querySelectorAll(".buttonFooter");
const footer = document.getElementById("footer");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");
const curPage = document.getElementById("curPage");
const mainContainer = document.getElementById("mainContainer");
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
            if(i!=0 && i!=3 && i!=1){
                body.children[i].style.opacity = "1";
                body.children[3].style.zIndex = "100";
            }
            body.children[3].style.zIndex = "1000";
            body.children[1].style.zIndex = "102";
            body.children[2].style.zIndex = "101";
            
            
            nextPage.style.opacity = "1";
            nextPage.style.zIndex = "1000";
            prevPage.style.opacity = "1";
            prevPage.style.zIndex = "-1000";
            if(page==maxPage){
                nextPage.style.opacity = "0";
                nextPage.style.zIndex = "-1000";
            }
            if(page==1){
                prevPage.style.opacity = "0";
                prevPage.style.zIndex = "-1000";
            }

            
        }
    }
})

var page = 1
var maxPage = 2
//A class that stores all of the projects details
class Project{
    constructor(name, description, image, link){
        this.name = name
        this.description = description
        this.image = image
        this.link = link
    }
}

var nameArr = [
    ["Cheese Portfolio","Enterprise Network Architecture Simulation for Cinema Infrastructure","Inverse Matrix Asymmetric Encryption","Optipath: Dijkstra Algorithm Visualizer"],
    ["Path Seeker","SHA256 Visualizer","Simple Candy Crush","Comming Soon"]
] 

var descriptionArr = [
    ["A simple projects built by vanilla javascript, css and html. Credit: UI design inspired by thegr8bini",
        "A more complicated project used for mimicking internet architecture for an imaginary cinema. Built during highschool using Packet Tracer, it is my first attempt to dive deeper into network communication",
    "A modified version of the Hill cipher. Using padding and inverse matrices, this program enables user to encrypt a line of english sentence into Chinese-like characters, vice versa.",
    "A project built in preparation for my discrete mathematics final. Utilizing java swing, this project supports drag-and-drop feature to enhance interaction"
    
    ],
     [ "A simple Java program that finds the shortest path between two points within a maze using BFS with customizable board size and barriers to enhance user experience",
        "A program that can help visualize the calculation of SHA256 hashing. Credit: UI design inspired by manceraio.",
        "Despite the game being simple, it still contains similar elements as the real game. For instance, finding and removing matches, gravity application, cascade matching. Also, users could also choose how the board is set up.",
    "Comming Soon"
    ]
]

var imageArr = [
    ["url(\"image/project1.jpeg\")","url(\"image/project2.jpg\")","url(\"image/project3.jpeg\")","url(\"image/project4.jpg\")"],
    ["url(\"image/project5.jpg\")","url(\"image/project6.jpeg\")","url(\"image/project7.jpeg\")","url()"]
]

var linkArr = [
    ["test.com","test.com","test.com","test.com"],
    ["test.com","test.com","test.com","test.com"]
]

var projectObjArr = []
var row = []
for(var i = 0;i<nameArr.length*4;i++){
    var obj = new Project(nameArr[Math.floor(i/4)][i%4], descriptionArr[Math.floor((i)/4)][(i)%4], imageArr[Math.floor(i/4)][i%4],linkArr[Math.floor((i)/4)][(i)%4])
    row.push(obj)
    if(row.length%4==0){
        projectObjArr.push(row)
        row = []
    }
}





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

function directEvent(e){
    e.addEventListener("mouseenter",(e)=>{
         let randNum = Math.floor(Math.random()*100);
         if(randNum>=90){
            cursorDesc.textContent = "Cheese chEese cheeSe 🧀🧀";
        }
        else{
            cursorDesc.textContent = "You'll be directed to my Github page";
        }
    })
    e.addEventListener("mousemove",(e)=>{
       
       
       
        cursorDesc.style.opacity = 1;
        cursorDesc.style.transition = "0.2s linear";
    })
    e.addEventListener("mouseleave",(e)=>{
        cursorDesc.style.backgroundColor = `rgb( ${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)} )`;
       cursorDesc.style.opacity = 0;
       cursorDesc.style.transition = "0s";
    })
}

direct.forEach((e)=>{
    directEvent(e)
})

window.addEventListener("mousemove",(e)=>{
    cursorDesc.style.left = `${e.clientX+20}px`; 
    cursorDesc.style.top = `${e.clientY+window.scrollY+30}px`;
})



window.addEventListener("scroll",(e)=>{
    projects.forEach((element,index)=>{
        let scrollPercentage = window.scrollY / element.offsetTop * 100;
        if(scrollPercentage>20 && scrollPercentage<100 ){
            if(index%2==0){
                element.style.right = "0%"
            }
            else{
                element.style.left = "0%";
            }
            element.style.opacity = 1;
        }
    })
   let footerScrollPercentage = window.scrollY / footer.offsetTop * 100;
   if(footerScrollPercentage > 40 && footerScrollPercentage<100){
     buttonFooter.forEach((element,index)=>{
                element.style.left = "0%";
                element.style.opacity = "1";
                element.style.transition = `ease-in-out 0.9s ${index*0.5}s`;
     })
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

function toProject(index){
    if(index==2){
        window.location.href = "https://github.com/Ilovecheese1234/Portfolio";
    }
     if(index==4){
        window.location.href = "https://github.com/Ilovecheese1234/SHA256demo";
    }
}

function refreshPage(element,index,direction){
        setTimeout(()=>{
            element.remove()
            
        },500)
        setTimeout(()=>{
            appendNewPage(index,direction)
        })
        
}

function appendNewPage(index,direction){
        var projectContainer = document.createElement("div");
        projectContainer.setAttribute("id",`project${index+1}Container`);
        projectContainer.setAttribute("class","projects");
        projectContainer.setAttribute("onclick",`toProject(${index+1})`)
        mainContainer.appendChild(projectContainer);
        if(direction==0){
            projectContainer.style.left = "100vw";
        }
        else{
            projectContainer.style.left = "-100vw";
        }
        

        var imageContainer = document.createElement("div");
        imageContainer.setAttribute("id",`image${index+1}Container`);
        imageContainer.setAttribute("class",`imageContainer`);
        projectContainer.appendChild(imageContainer)

        var image = document.createElement("div");
        image.setAttribute("id",`image${index+1}`);
        image.setAttribute("class","image");
        image.style.backgroundImage = projectObjArr[page-1][index].image
        imageContainer.appendChild(image)

        var projectTitle = document.createElement("div")
        projectTitle.setAttribute("id",`projectTitle${index+1}`)
        projectTitle.setAttribute("class",`projectTitle`)
        projectTitle.innerHTML = projectObjArr[page-1][index].name
        projectContainer.appendChild(projectTitle)

        var projectDesc = document.createElement("div")
        projectDesc.setAttribute("class","projectDesc")
        projectDesc.setAttribute("id",`projectDesc${index+1}`)
        projectDesc.innerHTML = projectObjArr[page-1][index].description
        projectContainer.appendChild(projectDesc)

        var d = document.createElement("div")
        d.setAttribute("class","direct")
        d.setAttribute("id",`direct${index+1}`)
        d.innerHTML = "Visit";
        projectContainer.appendChild(d)

        setTimeout(()=>{
             projectContainer.style.left = "0vw";
            projectContainer.style.opacity = "1";
        },200)    
}

function nextPageEventListener(){
    nextPage.addEventListener("mouseup",()=>{
        page += 1
        nextPage.style.opacity = "1";
        nextPage.style.zIndex = "-1000";
        prevPage.style.opacity = "1";
        prevPage.style.zIndex = "1000";
        if(page==maxPage){
            nextPage.style.opacity = "0";
            nextPage.style.zIndex = "-1000";
        }
        if(page==1){
            prevPage.style.opacity = "0";
            prevPage.style.zIndex = "-1000";
        }
        projects.forEach((e,i)=>{
            e.style.left = "-200%";
            refreshPage(e,i,0)  
        })
        
        setTimeout(()=>{
            direct = document.querySelectorAll(".direct");
            direct.forEach((e)=>{
                directEvent(e)
            })
            projects = document.querySelectorAll(".projects");
            nextPage.style.zIndex = "1000";
        },500)
        
        curPage.innerHTML = `Page ${page}`;
    })
}
function prevPageEventListener(){
    prevPage.addEventListener("mouseup",()=>{
        page -= 1
        nextPage.style.opacity = "1";
        nextPage.style.zIndex = "1000";
        prevPage.style.opacity = "1";
        prevPage.style.zIndex = "-1000";
        if(page==maxPage){
            nextPage.style.opacity = "0";
            nextPage.style.zIndex = "-1000";
        }
        if(page==1){
            prevPage.style.opacity = "0";
            prevPage.style.zIndex = "-1000";
        }
        projects.forEach((e,i)=>{
            e.style.left = "200%";
            refreshPage(e,i,1) 
        })
        setTimeout(()=>{
            direct = document.querySelectorAll(".direct");
            direct.forEach((e)=>{
                directEvent(e)
            })
            projects = document.querySelectorAll(".projects");
            prevPage.style.zIndex = "1000";
        },500)
        curPage.innerHTML = `Page ${page}`;
    })
}
var nextPageAction = nextPageEventListener();

var prevPageAction = prevPageEventListener();
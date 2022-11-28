let workPlace1 = document.querySelector("#workPlace1");
let workPlaceYear1 = document.querySelector("#workPlaceYear1");
let workPlaceInfo1 = document.querySelector("#workPlaceInfo1");

let workPlace2 = document.querySelector("#workPlace2");
let workPlaceYear2 = document.querySelector("#workPlaceYear2");
let workPlaceInfo2 = document.querySelector("#workPlaceInfo2");

let workPlace3 = document.querySelector("#workPlace3");
let workPlaceYear3 = document.querySelector("#workPlaceYear3");
let workPlaceInfo3 = document.querySelector("#workPlaceInfo3");

let workPlace4 = document.querySelector("#workPlace4");
let workPlaceYear4 = document.querySelector("#workPlaceYear4");
let workPlaceInfo4 = document.querySelector("#workPlaceInfo4");

let education1 = document.querySelector("#education1");
let educationYear1 = document.querySelector("#educationYear1");
let educationName1 = document.querySelector("#educationName1");

let education2 = document.querySelector("#education2");
let educationYear2 = document.querySelector("#educationYear2");
let educationName2 = document.querySelector("#educationName2");

let educationType3 = document.querySelector("#educationType3");
let educationYear3 = document.querySelector("#educationYear3");
let educationName3 = document.querySelector("#educationName3");
console.log(window.location.pathname)
     
if (window.location.pathname == "/page3.html"){             // Kör endast async funktionen på sida3 //
    async function getJson(){
        let response = await fetch("/utbildningar.json");
        if (response.ok){
            let data = await response.json();
            workPlace1.textContent = data.workhistory[0].name;
            workPlaceYear1.textContent = data.workhistory[0].year;
            workPlaceInfo1.textContent = data.workhistory[0].info;         
            
            workPlace2.textContent = data.workhistory[1].name;
            workPlaceYear2.textContent = data.workhistory[1].year;
            workPlaceInfo2.textContent = data.workhistory[1].info;
            
            workPlace3.textContent = data.workhistory[2].name;
            workPlaceYear3.textContent = data.workhistory[2].year;
            workPlaceInfo3.textContent = data.workhistory[2].info;
    
            workPlace4.textContent = data.workhistory[3].name;
            workPlaceYear4.textContent = data.workhistory[3].year;
            workPlaceInfo4.textContent = data.workhistory[3].info;
    
            education1.textContent = data.education[0].educationtype;
            educationYear1.textContent = data.education[0].year;
            educationName1.textContent = data.education[0].name;
    
            education2.textContent = data.education[1].educationtype;
            educationYear2.textContent = data.education[1].year;
            educationName2.textContent = data.education[1].name;
    
            educationType3.textContent = data.education[2].educationtype;
            educationYear3.textContent = data.education[2].year;
            educationInfo3.textContent = data.education[2].info;
        }
    }
    getJson();
}


                                    // MODAL //
let images = document.getElementsByClassName("pg4-img");
let button = document.getElementsByClassName("close-button");
let portfDiv1 = document.getElementById("portfDiv1");
let portfDiv2 = document.getElementById("portfDiv2");
let portfDiv3 = document.getElementById("portfDiv3");
let portfDiv4 = document.getElementById("portfDiv4");
let portfDiv5 = document.getElementById("portfDiv5");
let portfDiv6 = document.getElementById("portfDiv6");



function openModal(e){
    if (e.target.id == "pg-4-img-1"){
        portfDiv1.style.display = "block";
        button[0].addEventListener("click",closeModal); 
        console.log(e.target.id)                             
    }
    else if(e.target.id == "pg-4-img-2"){
        portfDiv2.style.display = "block";
        button[1].addEventListener("click",closeModal);        
    }
    else if(e.target.id == "pg-4-img-3"){
        portfDiv3.style.display = "block";
        button[2].addEventListener("click",closeModal);        
    }
    else if(e.target.id == "pg-4-img-4"){
        portfDiv4.style.display = "block";
        button[3].addEventListener("click",closeModal);        
    }
    else if(e.target.id == "pg-4-img-5"){
        portfDiv5.style.display = "block";
        button[4].addEventListener("click",closeModal);        
    }
    else if(e.target.id == "pg-4-img-6"){
        portfDiv6.style.display = "block";
        button[5].addEventListener("click",closeModal);        
    }
}                              
function closeModal(){
    portfDiv1.style.display = "none"
    portfDiv2.style.display = "none"
    portfDiv3.style.display = "none"
    portfDiv4.style.display = "none"
    portfDiv5.style.display = "none"
    portfDiv6.style.display = "none"
}                                                                
for (let image of images){
    image.addEventListener("click", openModal)
}
                                    
                                    





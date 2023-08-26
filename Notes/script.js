const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
//const notes=document.querySelectorAll(".input-box");



createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    img.src="download.png";
    
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
    }
})


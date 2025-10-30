const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("taskcontainer");

function addtask(){
    if(inputbox.value===''){
        alert("Write something pz!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        savedata();
    }
    inputbox.value='';
}

listcontainer.addEventListener("click",(e)=>{
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            savedata();
        }
        else if(e.target.tagName==="SPAN"){
                e.target.parentElement.remove();
                savedata();
        }

},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
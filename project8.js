function addTask(){
    let  input=document.getElementById('task');
    let task =  input.value;
    if (task==""){
        alert("please enter a text");
        return;
    }

let li = document.createElement("li");
let span=document.createElement("span");

span.textContent=task;


let completeBtn=document.createElement("button");
completeBtn.textContent="✅";
completeBtn.classList.add("completeBtn");
completeBtn.onclick=function(){
    li.classList.toggle("completed");
};

let delbtn=document.createElement("button");
delbtn.innerHTML='<i class="fa-solid fa-trash-can"></i>';
delbtn.onclick=function(){
    li.remove();
};
li.appendChild(completeBtn);
li.appendChild(span);
li.appendChild(delbtn);
document.getElementById("tasklist").appendChild(li);
input.value="";
}
    
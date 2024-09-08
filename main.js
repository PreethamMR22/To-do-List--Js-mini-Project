let addButton=document.querySelector("#addButton");
let taskInput=document.querySelector(".addtask input");
let tasks=document.getElementById("tasks");
if(tasks.innerText=="" ) {
    tasks.style.opacity='0.2';
}
addButton.addEventListener("click",()=> {
    document.getElementById("tasks").style.opacity='1';
    if(taskInput.value.length==0) {
        alert("Please Enter text to add...");
    }
    else {
         
        document.querySelector("#tasks").innerHTML+=`
        <div class="task">
        <span id="taskname">
        ${document.querySelector(".addtask input").value}
        </span>
        <button class="delete">
        <i class="fa-solid fa-trash"></i>
        </button>
        </div>
        `;

var deleteBtn=document.querySelectorAll(".delete");
  for(let i=0; i<deleteBtn.length ; i++) {
    deleteBtn[i].onclick=function() {
        this.parentNode.remove();
    }
  }

var tasks=document.querySelectorAll(".task");
for(let i=0 ; i<tasks.length ; i++) {
    tasks[i].onclick=()=> {
       tasks[i].classList.add("completed");
    
    }
}


taskInput.value="";
    }

})
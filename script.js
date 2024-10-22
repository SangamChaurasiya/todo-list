let todoInput = document.getElementById("todoInput");
let addTodoBtn = document.getElementById("addTodoBtn");
let todoList = document.getElementById("todoList");

addTodoBtn.addEventListener('click', addToDo);
todoInput.addEventListener('keypress', function(e){
    if (e.key === "Enter"){
        addToDo(this.value);
    }
})

function addToDo(value){
    const todoText = todoInput.value.trim();
    if (todoText !== ""){
        let li = document.createElement("li");
        li.textContent = todoText;
        todoList.appendChild(li);
        li.addEventListener("click", function(){
            li.classList.toggle("done");
        });
        todoInput.value = "";
    }else{
        alert("Please write an item for ToDo.")
    }

}

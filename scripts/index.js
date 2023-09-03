let todolist = [];
      function   createTodo(todoName, dueDate){
          const todoId= '' + new Date().getTime();
          if (dueDate !== "" && todoName !== "") {
            todolist.push({
              dueDate,
              todoName,
              todoId,
            });  
        }

      }
      function removeTodo(todoToBeDeleted){
         todolist = todolist.filter(filterArray);
         function  filterArray(todo){
         console.log(todo);
          return(todoToBeDeleted !== todo.todoId);
        } 

      }
      


       //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

       function renderTodoList() {
        
        const divElement = document.getElementById("todo-lst");
        divElement.innerHTML = "";
        for (let index = todolist.length - 1; index >= 0; index--) {
          const todoNameElement = document.createElement("div");
          const todoDateElement = document.createElement("div");


          todoNameElement.innerText =
            todolist[index].todoName;  
          todoDateElement.innerText = 
            todolist[index].dueDate;
          const deleteElement = document.createElement("button");
          deleteElement.innerText = "Delete";
          deleteElement.id=todolist[index].todoId;

          deleteElement.className='delete-button';
          deleteElement.onclick = deleteTodo;
         
          divElement.appendChild( todoNameElement);
          divElement.appendChild( todoDateElement);

          divElement.appendChild( deleteElement );

        }
      }


      //ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
      function addTodo() {
        const todoElement = document.getElementById("todo-input");
        const dueDateElement = document.getElementById("duedate-input");
        let todoName = todoElement.value;
        let dueDate = dueDateElement.value;
        createTodo(todoName, dueDate);
        todoElement.value = "";
        dueDateElement.value = "";
        renderTodoList();
      }
      function deleteTodo(event) {
        const deleteButtton = event.target;
        const todoToBeDeleted = deleteButtton.id;
        removeTodo(todoToBeDeleted);
        renderTodoList();
        
       }
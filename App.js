 let input = document.querySelector('.todoinput');

 const todolist = document.querySelector('.todolist');
 const todobutton=document.querySelector('.todobutton');

 const filterOption = document.querySelector('.filter-todo');



//event listner

 todobutton.addEventListener('click' , addTodo);
 todolist.addEventListener('click',deleteEvent);
 filterOption.addEventListener('click',filtertodo);


//function


 function addTodo(event){
    event.preventDefault();

if(input.value!==''){
    let todoDiv = document.createElement('div');

    todoDiv.className='todoItems';

let listItem = document.createElement('li');
 
 let listText=document.createTextNode(input.value);
 listItem.appendChild(listText);

 todoDiv.appendChild(listItem);

 //select button

let selectedbutton = document.createElement('button');
selectedbutton.className='selectbutton';
selectedbutton.innerHTML='<i class="fas fa-check"></i>';

todoDiv.appendChild(selectedbutton);

//trash button

let trashbutton = document.createElement('button');
trashbutton.className='trashbutton';
trashbutton.innerHTML='<i class="fas fa-trash"></>';

todoDiv.appendChild(trashbutton);

//add to the list area

todolist.appendChild(todoDiv);

    
 }
 else{
    return null;
}
}


 function deleteEvent(event){

     if(event.target.classList[0]==='trashbutton'){
        deleteElement = event.target.parentElement;
        deleteElement.classList.add('fall');
        deleteElement.addEventListener('transitionend',function(){
            deleteElement.remove();

        });
    

     }

     //check

     if(event.target.classList[0]==='selectbutton'){
        deleteElement = event.target.previousSibling;
        parentElement = event.target.parentElement;

        parentElement.classList.toggle('completed');

        console.log(parentElement);
        deleteElement.style.textDecoration='line-through';
        
        parentElement.style.opacity='0.5';
       // console.log(parentElement);
        
        
        

     }

     
     

 }

    function filtertodo(event){
    const todos =  todolist.childNodes;
    
    
    
    todos.forEach(todo => {
        switch(event.target.value){
        case "all":
            todo.style.display='flex';
            break;
        case "completed":
            if(todo.classList.contains('completed')){
                todo.style.display='flex';
            }else{
                todo.style.display='none'
            }
    }
 })
}
    





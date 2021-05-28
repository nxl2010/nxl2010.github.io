// CODE EXPLAINED channel

// Select the Elements
const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");
const LINE_THROUGH = "lineThrough";
let LIST, id;
let data = localStorage.getItem("TODO");

// check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface
}else{
    // if data isn't empty
    LIST = [];
    id = 0;
}

// load items to the user's interface
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// clear the local storage
clear.addEventListener("click", function(){
    localStorage.removeItem("TODO");
    location.reload();
});
// add to do function

function addToDo(toDo, id, done, trash){
     const LINE = done ? LINE_THROUGH : "";
    if(trash){ return; }
    const item = `      <li class="item">
                            <p class="text ${LINE}">${toDo}</p>
                            <i class="ti-check" job="ndss" id="${id}"></i>
                            <i class="ti-alarm-clock" job="podoro"></i>
                            <i class="ti-close" job="delete" id="${id}"></i>
                        </li>
                `;
    
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}
// add an item to the list user the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        
        // if the input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);
            
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
            
            // add item to localstorage ( this code must be added where the LIST array is updated)
            localStorage.setItem("TODO", JSON.stringify(LIST));
            
            id++;
        }
        input.value = "";
    }
});


// complete to do
function completeToDo(element){
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].trash = true;
}
function podoroTodo(element){
    window.open('file:///C:/Users/PC/Downloads/pomodoro-master/index.html', '_blank', 'toolbar=0,location=0,menubar=0',"height=200,width=200");    
}
// target the items created dynamically

list.addEventListener("click", function(event){
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete
    
    if(elementJob == "ndss"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
    else if(elementJob=="podoro"){
        podoroTodo(element);
    }
    
    // add item to localstorage ( this code must be added where the LIST array is updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});



















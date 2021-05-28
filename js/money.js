// CODE EXPLAINED channel

// Select the Elements
const clear1 = document.querySelector(".clear1");
const abs=document.querySelector(".ti-printer");
const get = document.getElementById("sss");
const input1 = document.getElementById("vatPham");
const input2 = document.getElementById("moneyy");
var sumM = document.querySelector('#sumM');
let user,id1;
let data1 = localStorage.getItem("MONEY");

// check if data is not empty
if(data1){
    user = JSON.parse(data1);
     id1 = user.length;
    loadList1(user); // load the list to the user interface
}else{
    // if data isn't empty
    user = [];
    id1=0;
}


// load items to the user's interface
function loadList1(ass){
    ass.forEach(function(headmoney){
        addMoney(headmoney.sanPham,headmoney.money);
    });
}

// clear the local storage
clear1.addEventListener("click", function(){
    localStorage.removeItem("MONEY");

    location.reload();
});
// add to do function

function addMoney(sanPham,money1){
    const nam = `     <li class="headmoney">
                                    <div id="cardproduct">
                                        <p>${sanPham}</p>
                                    </div>
                                    <div id="cardmoney">
                                        <p>${money1}</p>
                                    </div>        
                        </li>
                `;
    
    const position = "beforeend";
    
    get.insertAdjacentHTML(position, nam);
}
// add an item to the list user the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const sanPham = input1.value;
        var money1 = input2.value;
        
        
        // if the input isn't empty
        if(sanPham&&money1){
            addMoney(sanPham, money1);
           
            user.push({
                id:id1,
                sanPham: sanPham,
                money: money1,
            });
            localStorage.setItem('MONEY', JSON.stringify(user)) ;
        id1++;
        input1.value = "";
        input2.value = "";
        }
    }
});
abs.addEventListener("click", function(){
    let data2 = localStorage.getItem("MONEY");
     user2 = JSON.parse(data2);
     var sum=0;
    for(var i=0;i<id1;i++){
        sum=sum+Number(user2[i].money);
    }
    document.getElementById("foolmoney").style.display = 'block';

    sumM.innerHTML = sum;
    
});

// complJSON.stringify(user)ete to do
// function completeToDo(element){
//     element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
//     LIST[element.id].done = LIST[element.id].done ? false : true;
// }

// // remove to do
// function removeToDo(element){
//     element.parentNode.parentNode.removeChild(element.parentNode);
    
//     LIST[element.id].trash = true;
// }
// function podoroTodo(element){
//     window.open('file:///C:/Users/PC/Downloads/pomodoro-master/index.html', '_blank', 'toolbar=0,location=0,menubar=0',"height=200,width=200");    
// }
// // target the items created dynamically

// list.addEventListener("click", function(event){
//     const element = event.target; // return the clicked element inside list
//     const elementJob = element.attributes.job.value; // complete or delete
    
//     if(elementJob == "ndss"){
//         completeToDo(element);
//     }else if(elementJob == "delete"){
//         removeToDo(element);
//     }
//     else if(elementJob=="podoro"){
//         podoroTodo(element);
//     }
    
//     // add item to localstorage ( this code must be added where the LIST array is updated)
//     localStorage.setItem("TODO", JSON.stringify(LIST));
// });



















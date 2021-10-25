// const sumM=document.getElementById("ques");
let user5,id5;
let data5 = localStorage.getItem("LIB");
// var sty=document.getElementById("result");
// check if data is not empty
if(data5){
    user5 = JSON.parse(data5);
     id5 = user5.length;
    // loadList1(user); // load the list to the user interface
}else{
    // if data isn't empty
    user5 = [];
    id5=0;
}
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const input1 = document.getElementById("word");
        const input2 = document.getElementById("mean");
        const input3 = document.getElementById("type");        
        const word = input1.value;
        var mean = input2.value;
        var type = input3.value;

        
        
        // if the input isn't empty
        if(word&&mean&&type){
            // addMoney(sanPham, money1);
           
            user5.push({
                id:id5,
                word: word,
                mean: mean,
                type: type,
            });
            localStorage.setItem('LIB', JSON.stringify(user5)) ;
        id5++;
        input1.value = "";
        input2.value = "";
        input3.value = "";

        }
    }
});

// var ran=     (Math.floor(Math.random() * id5) );
// var sum=String(user5[ran].word);
// var answer=String(user5[ran].mean);
function ranDom(){
    var ran=     (Math.floor(Math.random() * id5) );
    return ran;
}
let ran=ranDom();
function getQues(){
    // let base = localStorage.getItem("LIB");
    // user5 = JSON.parse(base);
    // var sum=String(user5[ran].word);
    // alert(ran);
    // var ran=     (Math.floor(Math.random() * id5) );
    var sum=String(user5[ran].word);
    var answer=String(user5[ran].mean);
    document.getElementById("ques").innerHTML=sum;
    var ran1=     (Math.floor(Math.random() * id5) );
    var ran2=     (Math.floor(Math.random() * id5) );
    var ran3=     (Math.floor(Math.random() * id5) );
    var answer1=String(user5[ran1].mean);
    var answer2=String(user5[ran2].mean);
    var answer3=String(user5[ran3].mean);
    var array=[answer,answer1,answer2,answer3];
    shuffleArray(array);
    document.getElementById("a").innerHTML=array[0];
    document.getElementById("b").innerHTML=array[1];
    document.getElementById("c").innerHTML=array[2];
    document.getElementById("d").innerHTML=array[3];
   
}
var count=0;
var count2=0
 function nxzr(target){
    var ketQua=target.innerHTML;
    // alert(ketQua);
    var sum=String(user5[ran].word);
    var answer=String(user5[ran].mean);
    var type=String(user5[ran].type);

    if(ketQua==answer){
        document.getElementById("quiz").style.background = '#02ff00';        
        // document.getElementById("ns").style.background = '#02ff00';
        count++;
    }else{
        // window.setTimeout(showContent, 200);
        document.getElementById("quiz").style.background = 'red';
        // document.getElementById("result").style.backgroundColor = 'red';
        
        count2++;
    }
    setTimeout(function() {
        document.getElementById("quiz").style.background = 'rgba(19,197,174,0.3)';
        }, 300);
    // Giải thích nghĩa
    document.getElementById("name").innerHTML=sum;
    document.getElementById("nghia").innerHTML=answer;
    document.getElementById("ghiChu").innerHTML=type;       
    document.getElementById("count1").innerHTML=count;
    document.getElementById("count2").innerHTML=count2;  
    // document.getElementById("result").style.display = 'none';

    ran=ranDom();
    // ranDom();
    getQues();
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// abs.addEventListener("click", function(){
//     let data3 = localStorage.getItem("MONEY");
//      user5 = JSON.parse(data5);
//      // var sum=0;
//     for(var i=0;i<id1;i++){
//         sum=sum+Number(user2[i].money);
//     }
//     document.getElementById("foolmoney").style.display = 'block';

//     sumM.innerHTML = sum;
    
// });

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



















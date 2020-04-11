const inputField = document.querySelector(".input-val");
const subButton = document.querySelector(".btn1");
const clearButton = document.querySelector(".btn2");
const listWrap = document.querySelector(".list-content");


//Get and Set value of input and console
function setValue(){
    if(inputField.value){
    //create li tag
    var li = document.createElement("li");
    
    //insert into li tag
    li.insertAdjacentHTML("beforeend",`<i class="fa fa-circle-o"></i> ${inputField.value}`);
    listWrap.appendChild(li); //adds li to ul
    
    
    }else{
        alert("Enter some value");
    }
    //make input empty after adding
    inputField.value = "";
    
    //change class when list item is clicked
    function change(){
        li.classList.toggle('completeitem');
    }
     li.addEventListener("click",change);
    
    
}
    
//make list clickable and change class

//    var add = document.getElementById("myList");
//    add.addEventListener("click",changeClass);
//    function changeClass(){
//     add.classList.toggle('completeitem');
//    }

//click on button event
subButton.addEventListener("click",setValue);

//click on button event
clearButton.addEventListener("click",clearValue);

//if enter key is pressed
inputField.addEventListener("keydown",(e)=>{
    if(e.keyCode == 13){
        setValue();
    }
});




//fucntion for clear list
function clearValue(){
      
      while (listWrap.hasChildNodes()) {
      listWrap.removeChild(listWrap.firstChild);
      
  }
}

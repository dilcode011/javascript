// EVENT HANDLING

// 1. onclick
var btnn =document.querySelector("button");
btnn.addEventListener('click',function(){
    alert();
});

// change the text of button on click
btnn.addEventListener('click',function(){
    btnn.textContent="clicked";
});

// Style
btnn.addEventListener('click',function(){
    btnn.style.backgroundColor="blue";
});

//double click
btnn.addEventListener('dblclick',function(){
    btnn.style.backgroundColor="red";
});

// Mouse over
btnn.addEventListener('mouseover',function(){
    btnn.style.backgroundColor="pink";
});

// Mouse leave
btnn.addEventListener('mouseleave',function(){
    btnn.style.backgroundColor="yellow";
});



// Location of mouse while moving on screen
document.querySelector("body")
.addEventListener("mousemove",function(dets){
    console.log(dets)
})
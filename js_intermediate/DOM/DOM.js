// DOM(Document Object Model)
    //=>When a Web Page is Loaded the browser creates a DOM of the page
    //=>For Dynamic Changes
/*
                      WINDOW
                         |
                         |
                      DOCUMENT
                         |
                         |
                        HTML
                         |
               | -------- -------- |
               |                   |
 |  --------  HEAD                BODY  --------  |
 |                                                |
 1.META                                     ----     ----
 2.TITLE                                   |             |
 3.LINK                                   DIV          SCRIPT
                                           |
                                           1.IMG 
                                           2.H1
                                           3.P
                                           4.DIV 
*/

//console.dir(window.document)
     // =>document --> properties / methods

// console.dir(document.body);
    //=>To show the body tags

// console.dir(document.body.childNodes[1])
    //=>Show the first node of body


console.dir(document.body.childNodes[3].innerText="hello")


// DOM MANIPULATION
/*
  1. Selecting With Id
      document.getElementById("myId")

  2.Selecting With Class
      document.getElementByClassName("myClass")

  3.Selecting With Tags
      document.getElementByTagName("p")
*/


// By Id

let heading=document.getElementById("headingone")
console.dir(heading)

// By Class

let headings=document.getElementsByClassName("headingone")
console.dir(headings)


// .By Tag

let para=document.getElementsByTagName("p")
console.dir(para);



// QUERY SELECTOR
/*
    1.document.queryselector("myid/myclass/tag")
         -->return first element

    2.document.queryselectorall("myid/myclass/tag")   
         -->return a nodelist  
*/ 

// queryselector
let element1=document.querySelector("p")
console.dir(element1)


// queryselectorall
let element2=document.querySelectorAll("p")
console.dir(element2)


// Properties
/*
    1.tagname - returns tag for element nodes
    2.innertext - returns the text content of the element and all its children
    3.innerHTML - returns the plain text or HTML contents in the element
    4.textcolumn - returns textual content even for hidden elements
*/ 


// Attributes
/*
   1.getAttribute(atr)
     --> to get the attributes value

   2.setAttribute(atr,value)
     --> to set the attribute value th
*/

// Style
/*
    node.style
*/ 


let div=document.querySelector("div")
console.log(div);
let id=div.getAttribute("id")
console.log(id)


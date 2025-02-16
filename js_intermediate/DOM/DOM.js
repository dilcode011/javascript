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

// let heading=document.getElementById("headingone")
// console.dir(heading)

// By Class

// let headings=document.getElementsByClassName("headingone")
// console.dir(headings)

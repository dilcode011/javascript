//=> CREATE AN HTML PAGE WITHA BUTTON. WHEN THE BUTTON IS CLICKED , CHANGE THE TEXT OF A PARAGRAPH ELEMENT.

    //    var btn=document.querySelector("button")
    //    var p=document.querySelector("p")

    //   btn.addEventListener("click",function(){
    //   p.textContent="hello dilpreet sir"
    //    })



//=>CREATE A PAGE WITH TWO IMAGES AND A BUTTON. WHEN THE BUTTON IS CLICKED , SWAP THE SOURCE ATTRIBUTE OF THE IMAGES

    //    var img1=document.querySelector("#one")
    //    var img2=document.querySelector("#two")
    //    document.querySelector("button")

    //    .addEventListener("click",function(){
    //         var src1 =img1.src;
    //         var src2 =img2.src;

    //         img1.src = src2;
    //         img2.src=src1;
    //     })



//=>CREATE A FORM WITH INPUT FIELDS AND A SUBMIT BUTTON.USE JS TO VALIDATE THE FORM AND DISPLAY AN ERROR MSG IF THE INPUT IS INVALID.

        // var form=document.querySelector("form")
        // var inp1=document.querySelector("#inp1")
        // var inp2=document.querySelector("#inp2")
        // var h4=document.querySelector("h4")
        // form.addEventListener("submit",function(ev){
        //     ev.preventDefault();
        //     if(inp1.value===''|| inp1.value===''){
        //     h4.textContent="ERROR";
        //     h4.style.color="red"
        //     }
        //     else{
        //         h4.textContent="";
        //         h4.style.color="black";
        //     }
        // })



//=>CREATE AN UNORDERED LIST.ALLOW USERS TO ADD AND REMOVE LIST ITEMS DYNAMICALLY USING BUTTONS.

            // var add=document.querySelector("#add")
            // var remove=document.querySelector("#remove")
            // var inp=document.querySelector("input")
            // var ul=document.querySelector("ul")
            // var li;
            // add.addEventListener("click",function(){
            //     if(inp.value.trim()===''){}
            //     else{
            //         li =document.createElement('li');
            //         li.textContent=inp.value;
            //         ul.appendChild(li);
            //         inp.value="";
            //     }
            // })
            // remove.addEventListener("click",function(){
            //     ul.removeChild(li)
                
            //     })



//=>BUILD A COUNTDOWN TIMER THAT STARTS WHEN A BUTTON IS CLICKED AND UPDATES THE DISPLAY IN REAL TIME.

    //    var start=document.querySelector("#start");
    //    var stop=document.querySelector("#stop");
    //    var h3=document.querySelector("h3");
    //    var intr;
    //    start.addEventListener("click",function(){

    //     var COUNT=0;
    //      intr=setInterval(function(){
    //      h3.textContent=COUNT;
    //     COUNT++;
    //      },1000);
    //    })

    //    stop.addEventListener("click",function(){

    //     clearInterval(intr);
    //    })



//=>CREATE A TABBED INTERFACE WHERE CLICKING ON TABS DISPLAYS DIFFERENT CONTENT SECTIONS WITHOUT PAGE RELOAD

    //   var home=document.querySelector("#home");
    //   var about=document.querySelector("#about");
    //   var content=document.querySelector("#content");

    //   var hometext=document.querySelector("hometext");l
    //   var contenttext=document.querySelector("#contenttext");
    //   var abouttext=document.querySelector("#abouttext");

    //   hometext.Style.display="block";
    //   hometext.Style.width="50%";
    //   home.addEventListener("click",function(){
    //     saretexthata()
    //     hometext.Style.display="block";
    //    hometext.Style.width="50%";
    //   })
    //   about.addEventListener("click",function(){
    //     saretexthata()
    //     abouttext.Style.display="block";
    //     abouttext.Style.width="50%";
    //   })
    //   content.addEventListener("click",function(){
    //     saretexthata()
    //     contenttext.Style.display="block";
    //     contenttext.Style.width="50%";
    //   })
    //   function saretexthata(){
    //     document.querySelector("h3").forEach(function(h3){
    //         h3.style.display="none";
    //     })
    //   }


//=>DISPLAY A PROGRESS BAR THST UPDATES IN REAL TIME,SHOWING THE PROGRESS OF A TASK,DOWNLOAD,OR FORM SUBMISSION.
 
        // var prg=document.querySelector("#progress");
        // var count=0;
        // var intr=setInterval(function(){
        //     if(count===100){
        //         clearInterval(intr);
        //     }
        //     count++;
        //     prg.style.width=count+'%';
        // },100)
// A STRING IS A GOLDEN STRING IF IT STARTS WITH CHAR A OR a AND HAS TOTAL LENGTH GREATER THAN 5 AND NOT IF NOT

let str1="dilpreet"
if((str1[0]=='A'||str1[0]=='a')&&str1.length>5){
    console.log("golden string");
}
else{
    console.log("not good");
    
}
// GUESS MY FAVORITE MOVIE UNTIL ITS TRUE

const fav="angrej"
let guess=prompt("guess my favorite movie")
while((guess!=fav) && (guess!="quit")) {
    guess=prompt("guess again")
}
if(guess==fav){
    console.log("congrats");
}
else{
    console.log("quit");
}




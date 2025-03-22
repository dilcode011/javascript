// CONSTRUCTOR
/*Constructor function technically are regular functions.
There are two conventions though:
1.They are named with capital letter first
2.They should be executed only with "NEW" operator
*/

function User(name){
    this.name=name;
}
let person=new User("dilpreet")    //here we make var to save name
console.log(person);
// or
console.log(new User("dil"));

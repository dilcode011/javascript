// PROTOTYPAL INHERITANCE
    //=> protoype refers to another object
    
function person(name){
    this.name=name;
}

person.prototype.greet=function(){          //greet is a method
    console.log(`hello , my name is ${this.name}`);
    
}
let dil =new person("dilpreet")
dil.greet();

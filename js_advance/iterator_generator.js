// ITERATOR AND GENERATOR
    //=>To generate the function we use function with " * "
       //=>It does not execute function all at a once
      //=>It depend on resume basis 

function* numberGenerator(){
    yield 1
    yield 2
    yield 3
}
let gen=numberGenerator();
let gen2=numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);       //undefined -> If there is more than written yields

console.log(gen2.next().value);
console.log(gen2.next().value);

let num=13;
// created a function to check if the number is prime or not
function checkPrime(num){
let count=0;
for(let i=1; i<=num; i++){
if(num%i==0){
count++}
if(count==2){
console.log("prime")
}else{
console.log("not a prime");
}
  
 checkPrime(13);
  checkPrime(2);

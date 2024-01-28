 const num = 79;
 let temp = 0;
 if (num<2) {
    console.log("Prime number");
 }
 for(let i =2; i<=(num/2); i++){
     if (num%i==0) {
        temp = 1;
        break;
     }
}
if (temp==1) {
    
    console.log("Not a prime number:");
}else{
    console.log("Prime Number");
}
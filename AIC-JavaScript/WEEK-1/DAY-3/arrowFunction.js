 // calculatePower using arrow function
 const calculatePower = (num , power) =>{
     let ans =1;
    for (let index = 1; index <=power; index++) {
         ans = ans*num;
    }
    return ans;
 } 
 console.log(calculatePower(5,2));


// optimized arrow function use-

const details = (name , age)=>`Name:${name} Age:${age}`;
console.log(details("Raushan",20));
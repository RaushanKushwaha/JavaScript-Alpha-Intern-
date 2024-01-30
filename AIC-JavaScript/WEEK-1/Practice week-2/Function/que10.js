 function largestNum(x,y,z,k){
if (x>y && x>z && x>k) {
    console.log(x+ " is largest");
}else if (y>x && y>z && y>k) {
    console.log(y+ " is largest"); 
} else if(z>x && z>y && z>k){
    console.log(z+ " is largest");
}else{
    console.log(k +" is largest");
}
    
}
largestNum(10,20,30,25);
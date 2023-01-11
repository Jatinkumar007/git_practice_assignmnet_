let n=5;
let count=0;
for(let i=1;i<=5;i++){
   if(n%i==0){
     count++;
   }
}
count==0 ? console.log(n, "is prime"): console.log(n, "is not prime");



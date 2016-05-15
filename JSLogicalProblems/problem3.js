
var number=600851475143;
var max=0;

function isPrime(n) {
 if (isNaN(n)) return false; 
 for (var i=3;i<=Math.sqrt(n);i+=2) {
  if (n%i==0) return false;
 }
 return true;
}

for(i=3;i<=Math.sqrt(number);i=i+2)
{
if(isPrime(i))
max=i;
}

if(max===0)
{
     if(number%2===0)
     	max=2;
     else max=1;
    
}

console.log("Largest prime factor is "+max);
document.querySelector(".main").innerHTML = max;

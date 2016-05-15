var sum = 0;
var value1=1;
var value2=2;

while(value2<4000000)
{
if(value2%2 === 0)
sum+=value2;

value2+=value1;
value1=value2-value1;
}

console.log("Sum is " + sum);
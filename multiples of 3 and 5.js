
function solution(number){
 let sum=0; 
  number--  //it says number BELOW so you have to lower it
  while(number>0) { 
    if(number%3==0 ||number%5==0)sum+=number // only consider the multiples once
    number--
  }
  return sum
}

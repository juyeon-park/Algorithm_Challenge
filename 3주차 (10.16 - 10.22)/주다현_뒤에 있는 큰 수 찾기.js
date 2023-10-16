function solution(numbers) {
    let answer = [], copyArr=[...numbers].sort((a,b)=>a-b)

for(let i=0;i<numbers.length;i++){
if(i==numbers.length-1) {
 answer.push(-1)
 break
}
 for(let j=i+1;j<numbers.length;j++){
  if(numbers[i]<numbers[j]) {
   answer.push(numbers[j])
   break
  }
if(j==numbers.length-1) answer.push(-1)
 }
}
    return answer
}
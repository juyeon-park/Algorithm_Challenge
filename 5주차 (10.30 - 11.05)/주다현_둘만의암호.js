function solution(s, skip, index) {
 let answer = '', alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 skip.split('').forEach((v)=>{
  alpha.splice(alpha.indexOf(v),1)
 })

 answer=s.split('').map(v=>{ 
  return alpha[(alpha.indexOf(v)+index)%alpha.length]
 })


  return answer.join('')
}
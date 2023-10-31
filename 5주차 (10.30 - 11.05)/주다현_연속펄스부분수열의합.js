function solution(sequence) {
    let answer =0, plus=[], minus=[]
   if(sequence.length==1&&sequence[0]<0)return (-1)*sequence[0]
   if(sequence.length==1&&sequence[0]>=0) return sequence[0]
   
   sequence.forEach((v,i)=>{
   if(i==0){
    plus.push(sequence[i])
    minus.push((-1)*sequence[i])  
   } 
   
   else if(i%2==1) {
   plus.push(Math.max((-1)*sequence[i],plus[i-1]-sequence[i]))
   minus.push(Math.max(sequence[i],minus[i-1]+sequence[i]))
   }
   else {
   plus.push(Math.max(sequence[i],plus[i-1]+sequence[i]))
   minus.push(Math.max((-1)*sequence[i],minus[i-1]-sequence[i]))
    }
   
   answer=Math.max(plus[i],minus[i],answer)
   }) 
   
       return answer
   }


   //시간 초과 난 코드

// function solution(sequence) {
//     let answer = [], arr1=[], arr2=[], stack=[],top=-1
//    if(sequence.length==1&&sequence[0]<0)return (-1)*sequence[0]
//    if(sequence.length==1&&sequence[0]>=0) return sequence[0]
//    arr1=sequence.map((v,i)=>{
//    if(i%2==0) return v*(-1)
//    else return v
//    })
   
//    arr2=sequence.map((v,i)=>{
//    if(i%2==1) return v*(-1)
//    else return v
//    })
   
//    arr1.forEach((v,idx)=>{
//     for(let i=idx+1;i<arr1.length;i++){
//    if(stack.length==0){
//     stack.push(arr1.slice(idx,i+1).reduce((a,b)=>a+b,0))
//     top++
//    }
//    if(stack[top]>arr1.slice(idx,i+1).reduce((a,b)=>a+b,0)) continue
//    else stack[top]=arr1.slice(idx,i+1).reduce((a,b)=>a+b,0)
//     }
//    })
//    answer.push(stack[top])
//    stack=[]
//    arr2.forEach((v,idx)=>{
//     for(let i=idx+1;i<arr2.length;i++){
//    if(stack.length==0){
//     stack.push(arr2.slice(idx,i+1).reduce((a,b)=>a+b,0))
//     top++
//    }
//    if(stack[top]>arr2.slice(idx,i+1).reduce((a,b)=>a+b,0)) continue
//    else stack[top]=arr2.slice(idx,i+1).reduce((a,b)=>a+b,0)
//     }
//    })
//    answer.push(stack[top])
//        return Math.max(...answer)
//    }

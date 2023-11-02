function solution(numbers, hand) {
    let answer = '', leftHand='*', rightHand='#'
    let keyLocation={
     1 : [0,0],
     2 : [0,1],
     3 : [0,2],
     4 : [1,0],
     5 : [1,1],
     6 : [1,2],
     7 : [2,0],
     8 : [2,1],
     9 : [2,2],
     '*':[3,0],
     0 : [3,1],
     '#':[3,2],
   }
   
    numbers.forEach((v,i)=>{
     if(v==1||v==4||v==7) {
     answer+='L'
     leftHand=v
     }
     else if(v==3||v==6||v==9) {
     answer+='R'
     rightHand=v
     }
     else {
     //현재 값인 v랑 leftHand, v랑 rightHand 사이의 거리 구해서 다르다면 가까운 손으로 누르고 해당 손에 v넣기
     let rightLen, leftLen
     rightLen=Math.abs(keyLocation[v][0]-keyLocation[rightHand][0])+Math.abs(keyLocation[v][1]-keyLocation[rightHand][1])
     leftLen=Math.abs(keyLocation[v][0]-keyLocation[leftHand][0])+Math.abs(keyLocation[v][1]-keyLocation[leftHand][1])
     if(rightLen<leftLen) {
      answer+='R'
      rightHand=v
     }
     else if(rightLen>leftLen) {
      answer+='L'
       leftHand=v
      }
     // 거리가 같다면  
     else {
      if( hand=='right') {
      answer+='R'
      rightHand=v
     }
      else {
     answer+='L'
     leftHand=v
      }
     } 
    }
    })
   
     return answer
   }
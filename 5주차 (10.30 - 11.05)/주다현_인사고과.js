function solution(scores) {
    let failer = 0, wanhoScore = scores[0]
    let wanhoSum = wanhoScore[0] + wanhoScore[1]
   
   if(scores.filter(v=>v[0]>wanhoScore[0]&&v[1]>wanhoScore[1]).length>0) return -1
   
   scores=scores.filter((v)=>v[0]+v[1]>wanhoSum)
    
   scores.sort((a,b)=>a[0]-b[0])
   for(let i=0;i<scores.length;i++){
    for(let j=i+1;j<scores.length;j++){
     if(scores[i][0]<scores[j][0]&&scores[i][1]<scores[j][1]) {
       failer++
       break
      }
    }
   }
   
   
    return scores.length-failer+1
   }
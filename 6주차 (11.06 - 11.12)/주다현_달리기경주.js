function solution(players, callings) {
    let index={}
 
 for(let i=0;i<players.length;i++){
 index[players[i]]=i
 }
 
 callings.forEach((v,i)=>{
 const idx = index[v]
 const temp=players[idx-1] 
 
 players[idx-1]=v
 players[idx]=temp
 
 index[v]=idx-1
 index[temp]=idx
 
 })
 
     return players
 }
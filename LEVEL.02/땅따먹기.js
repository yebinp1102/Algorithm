function solution(land){
  let answer = 0;
  for(let i=1; i<land.length; i++){
    for(let j=0; j<4; j++){
      let arr = land[i-1].slice()
      arr[j] = 0;
      land[i][j] += Math.max.apply(null, arr);
      answer = Math.max(land[i][j], answer)
    }
  }
  return answer;
}


// 예제 )
const land = [[1,2,3,5],[5,6,7,8],[4,3,2,1]]
console.log('The answer is :' ,solution(land)) // 16


// 자세한 풀이 :
// https://blog.naver.com/yebinp1102/222877736503

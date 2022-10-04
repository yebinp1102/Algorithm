function solution(arr1, arr2){
  let answer = [];
  for(let i =0; i<arr1.length; i++){
    let arr = arr1[i]
    answer.push([])
    for(let j=0; j < arr2[0].length; j++){
      let sum = 0;
      for(let z = 0; z<arr2.length; z++){
        sum += arr[z] * arr2[z][j]
      }
      answer[i].push(sum)
    }
  }
  return answer;
}


// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12949

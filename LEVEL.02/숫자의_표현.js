function solution(n){
  let answer = 0;
  for(let i=1; i<=n; i++){
    if(n%i===0 && i%2===1) answer++;
  }
  return answer
}

// 접근 방식 : 연속된 자연수의 합으로 표현 가능한 경우의 수 = 홀수인 약수 갯수
// ex) 15가 주어졌을 때, 홀수인 약수의 갯수는 1, 3, 5, 15 총 4개이므로 답은 4이다.
// 약수 1은 연속하는 1개의 자연수 합으로 표현 가능함을 의미 -> 15
// 약수 3은 연속하는 3개의 자연수 합으로 표현 가능함을 의미 -> 4+5+6
// 약수 5는 연속하는 5개의 자연수 합으로 표현 가능함을 의미 -> 1+2+3+4+5
// 약수 15는 모든 홀수(2n+1)는 n+(n+1)로 표현 가능함을 의미 -> 7+8



// 투포인터로 문제 풀기
function solution(n){
  let answer = 0;
  let right = 1, sum = 1;
  for(let left = 1; left <=n; left++){
    while(sum < n){
      right++;
      sum+=right;
    }
    if(sum===n) answer++;
    sum-=left;
  }
  return answer;
}

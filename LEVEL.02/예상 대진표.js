// 문제 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/12985?language=javascript

function solution(n, a, b){
  let answer = 0;
  while(a!==b){
    a = Math.ceil(a/2)
    b = Math.ceil(b/2)
  }
  return answer;
}

// 설명 ) 토너먼트의 구조를 이해하면 간단하게 풀 수 있는 문제다.
// 토너먼트의 작동 원리는 2명이 겨루고 우승자가 다른 우승자와 매칭 되어 또 다시 2명이서 겨루게 된다.
// 이렇게 다음 라운드로 올라갈 수록 전체 참가자 수는 N/2가 된다. 
// 이 점을 고려 했을 때, A와 B는 가장 처음 가진이 배정 받은 참가 번호에서 다음 라운드로 넘어 갈 때 마다 참가번호/2를 반올림 한 수를 새로운 참가번호로 받게 된다. 
// 그리고 두 참가자가 만나는 순간은 이 참가번호가 같아지는 순간이다.

// 예시 ) N : 8, a: 4, b:7
// A는 첫번째 라운드에서 승리하면, 참가번호 2번으로 갱신되고, B는 승리하면 참가번호 4로 갱신된다.
// 두번째 라운드에서 A는 승리 후, 1번으로 배정 받고, B는 2를 배정 받는다.
// 세번째 라운드에서 A와 B 참가자는 마침내 만나게 된다. 따라서 solution 함수가 return 하는 값은 3이 된다. 



// while문 대신 for문을 사용한 다른 풀이
function solution(n,a,b){
  for(let i=1; i<n; i++){    // i는 몇번째 라운드인지 의미함
    a=Math.ceil(a/2);
    b=Math.ceil(b/2);
    if(a===b) return i
  }
}

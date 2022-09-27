function solution(numbers){
  function f(x){
    // 1. x가 짝수 일때
    if(x%2 === 0) return x+1
    
    // 2. x가 홀수 일때
    let bit = "0" + x.toString(2);
    let idx = bit.lastIndexOf("0")
    return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx+2)}`,2)
  }
  const answer = [];
  for(let number of numbers) answer.push(f(number));
  return answer;
}


// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/77885

// 전체 로직 설명
// f(x)의 x가 홀수 일때와 짝수 일때를 나눠서 생각한다.

// 1. x가 짝수인 경우 : x를 2진수로 나타내면 무조건 마지막 비트는 0이 된다는 점을 고려 했을 때, x가 짝수인 경우는 항상 x+1(=홀수)가 답이 된다.
// 예를 들어 x가 4인 경우 2진수로 나타내면 100인데, x+1인 5의 2진수는 101로 조건에 부합하는 최적의 조건이다.

// 2. x가 홀수인 경우 : 뒤에서부터 0을 찾고, 0을 1로 바꾸고 기존 0의 뒤에 있던 1을 0으로 바꾼다. 
// 예를 들어 x = 9일때, 1001의 뒤에서 첫번째 0인 3번째 0을 1로 바꾸고 4번째 1을 0으로 바꾼 1010이 답이된다. 1010은 10진수 10임.

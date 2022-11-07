function solution(s){
  let answer = 0;
  if(s.length % 2 === 1) return 0;
  
  for(let i=0; i<s.length; i++){
    let str = s.slice(i) + s.slice(0, i);
    let flag = 1; 
    let stack = [];
    for(let n of str){
      if(n === '(' || n === '{' || n === '[') stack.push(n);
      else{
        let poped = stack.pop();
        if(poped === '(' && n === ')') continue
        if(poped === '{' && n === '}') continue
        if(poped === '[' && n === ']') continue
        flag = 0;
        break;
      }
    }
    if(flag) answer++
  }
  return answer;
}

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/76502

// 로직 설명 )
// 가장 먼저 s.length가 홀수면 괄호의 짝이 맞지 않아 무조건 올바르지 않은 문자열이니 곧바로 0을 반환한다.
// 반면 s.length가 짝수면 s.length번 만큼 for문을 돌면서 괄호를 왼쪽으로 회전한다. (회전은 slice 메서드로 간단 구현 가능하다)
// 이렇게 짝이 올바른지 묻는 문제는 주로 스택 자료 구조의 특징인 LIFO 개념을 사용한다.
// stack을 하나 생성해두고 i번 회전한 문자열인 str의 요소를 하나씩 탐색한다.
// 만약 요소가 여는 괄호( (, {, [)이면 stack에 push하고 닫는 괄호(),},])면 stack의 가장 최근 push된 여는 괄호와 닫는 괄호가 일치하는지 확인한다.
// 만약 일치한다면 다음 문자열도 계속 탐색하고, str의 모든 요소를 탐새 했을 때 모두 올바른 괄호면 flag가 1이니 answer에 + 1을 해준다.
// 반면 일치하지 않는다면 해당 str 문자열을 올바르지 않은 괄호를 가지니 flag를 0으로 만든 for문을 빠져나와 다음 str(왼쪽으로 회전시킨)이 올바른 괄호인지 탐색하기 시작한다.



// 다른 풀이 : 매핑 알고리즘 사용
function solution(s){
  if(s.length%2===1) return 0;
  let answer = 0;
  let stack = [];
  const mapping = { "}" : "{", "]" : "[", ")" : "("};

  for(let i=0; i<s.length; i++){
    stack = [];
    let flag = true;
    let str = s.substring(i,s.length) + s.substring(0,i);
    
    for(let j=0; j<str.length; j++){
      let braket = str[j];
      if(braket === '(' || braket === '[' || braket === '{') stack.push(braket);
      else{
        const popped = stack.pop();
        if(popped !== mapping[braket]){
          flag = false;
          break;
        }
      }
    }
    if(flag) answer++;
  }
  return answer;
}

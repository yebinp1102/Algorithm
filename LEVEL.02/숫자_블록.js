function findMaxDivisor(number){
  if(number === 1) return 0;
  for(let i = 2; i<= Math.sqrt(number); i++){
    if(number % i === 0 && number / i <= 1e7) return number / i
  }
  return 1;
}

function solution(begin, end){
  let answer = [];
  for(let i = begin; i <= end; i++){
    answer.push(findMaxDivisor(i));
  }
  return answer;
}


// 전체 로직 설명 )
// answer 배열은 최종적으로 반환할 결과 값이며, 0번째 인덱스 요소부터 차근차근 채워 나간다.
// 각 요소를 구하는 방법은 해당 블록 번호의 약수 중 가장 큰 수를 구하면 된다.
// 예를 들어 answer 배열의 9번째(=8번 인덱스 요소)에는 9의 최대 약수인 3이 들어가며, 
// 이 3이 의미하는 바는 9번째 위치에는 3번 블록을 사용한다는 말이다.
// 문제에서 첫번째 1번 블록이 2번째 위치부터 사용된다고 했으니 첫번째 블록은 자동으로 0이 되므로, 초기값을 지정해줄 필요가 있다.
// 이 초기 값은 findMaxDivisor 함수를 통해 설정 했는데, 이 findMaxDivisor 함수는 최대 약수르 구하는 함수이다.

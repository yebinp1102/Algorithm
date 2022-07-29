const fibonacci = (n) => {
  let memoization = new Array(n+1).fill(0);
  memoization[0] = 1, memoization[1] = 1;
  for(let i =2; i<=n; i++){
    memoization[i] = (memoization[i-2] + memoization[i-1]) % 1000000007
  }
  return memoization[n]
}

function solution(n){
  return fibonacci(n)
}

// 설명 )
// n이 1일 때, 1가지 
// n이 2일 때, 2가지 
// n이 3일 때, 3가지
// n이 4일 때, 5가지 ... 
// 이런 식으로 n의 갯수가 늘어날수록, 가지 수는 1,2,3,5,8,13 ... 이 된다.
// 이는 피보나치 수열 형태이다.
// 피보나치 수열을 재귀함수로 구현하게 되면 n이 크면 클수록 콜 스택에 과부화가 걸릴 가능성이 높기 때문에, 메모이제이션 방식을 채택해야 한다.
// 메모이제이션이란 같은 연산을 반복하지 않기 위해 어떤 연산을 수행하면 해당 연산에 대한 기록을 남김으로써 다음에 같은 연산을 실행 해야 할 경우, 연산은 스킵하고 결과 값만 불러오는 것이다.
// 피보나치 수열을 메모이제이션으로 구현할 때, 1번과 2번 값은 각각 1과 2로 초기화 하는 것이 일반적이다. 


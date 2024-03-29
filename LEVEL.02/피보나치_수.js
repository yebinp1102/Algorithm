function solution(n){
  let answer = 0;
  
  // 초기값 F(0), F(1) 설정.
  let f1 = 0, f2 = 1;
  
  // F(2)부터 F(N)까지 반복문으로 값을 구함.
  for(let i = 2; i <= n; i++){
    // answer은 F(2)부터 값을 F(N)까지 누적.
    answer = (f1 + f2) % 1234567;
    // F(1)은 항상 더하는 값의 첫번째 수
    f1 = f2;
    // F(2)느 항상 더하는 값의 두번째 수
    f2 = answer;
  }
  
  return answer;
}

// 피보나치 수열의 특성상 이전 수 (2개)의 합이 그 수가 된다. 
// 예를 들어, F(5)를 구하고 싶다면 F(3) + F(4)를 구하면 된다는 말이다.
// 이 문제에서 최종적으로 구해야 하는 수는 F(N)이기 때문에 F(N-2) + F(N-1)을 구하기 위해서는 초기 값 F(0)과 F(1)을 설정해 두고,
// 각 수를 F(N)을 구할 때 까지 더해가면 되는 간단한 문제이다. 

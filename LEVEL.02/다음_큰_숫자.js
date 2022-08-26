function solution(n){
  const NumOfOne = n.toString(2).split("1").length;
  for(let i = n +1; i <= 1000000; i++){
    if(i.toString(2).split("1").length === NumOfOne) return i
  }
}


// 전체 로직 )
// 먼저 문제의 조건 2번에서 n을 2진수로 변경 했을 때의 1의 갯수를 구하라고 한다. 
// 숫자를 2진수로 변경하는 것은 간단히 toString(2) 메서드를 사용하면 되고, 그 중 1의 갯수를 구하는 것은 split 메서드로 해당 2진수를 1을 기준으로 나누게 되면,
// split 메서드가 반환하는 배열에는 2진수의 1의 갯수만큼의 요소가 생긴다.
// 따라서 n.toString(2).split("1").lenght를 했을 때 우리가 원하는 값을 얻을 수 있다. 

// 그리고 조건 1과 3에 부합하는 수를 찾기 위해서는 단순히 n + 1 부터 1,000,000 사이의 숫자를 하나씩 탐색하면서 조건 2에 부합하는 숫자를 찾는 즉시 return 하면 된다. 

function solution(numbers, k) {
  let arr = [];
  for(let i=0; i<numbers.length; i++){
    while(k>0 && arr.length > 0 && arr[arr.length -1] < numbers[i]){  // 설명 1 참고
      k--;
      arr.pop();
    }
    arr.push(numbers[i]);
  }
  arr.splice(numbers.length - k, k);
  return arr.join("");
}

// 로직 )
// numbers[0]을 가장 먼저 arr 배열에 push 한 다음, 이후의 numbers 문자열의 요소를 하나씩 탐색 하면서, 
// arr 배열의 가장 마지막 요소 보다 큰 수를 발견하면 큰 수를 arr 배열에 push 하고, 더 작은 수는 pop 한다.
// 예를 들어 "123"이 numbers로 주어진다면, arr에는 ["1"] , ["2"], ["3"] 순서로 재할당 되는 것이다.
// 하지만 이렇게만 한다면 문제가 제시하는 조건을 만족하지 않을 수 있다.
// 문제에서는 반드시 k개의 숫자만 제거할 수 있음을 제시하고 있다. 
// 만약 numbers로 "123"이 주어지고 k가 1이라면, arr에는 반드시 2개의 문자열이 존재해야 한다는 말이다.
// 이러한 경우엔 반드시 arr 배열엔 ["2","3"]이 존재해야 한다.
// 또한 numbers가 "3214321"이고, k가 5인 경우, arr 배열에 ["4","3","2","1"]이 남기 때문에 문제 조건에 부합하지 않는다.
// 이러한 경우를 대비해 splice 함수를 이용해서, numbers.length - k 번째 인덱스부터 k개의 요소를 제거하면 arr 배열엔 ["4","3"]만 남게 되며 문제 조건에 부합한다.
// 참고로 k는 고정 값이 아니라 arr에서 어떤 요소가 pop 될 때 마다 1씩 줄어든다. 

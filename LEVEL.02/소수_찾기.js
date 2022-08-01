function solution(numbers){
  let answer = [];
  let nums = numbers.split('');
  
  // isPrime 함수는 특정 숫자가 소수면 true, 아니면 false를 반환하는 함수이다.
  const isPrime = (num) => {
    if(num <= 1) return false;
    for(let i = 2; i*i <= num; i++ ){
      if(num % i === 0) return false;
    }
    return true;
  }
  
  // getPermutation 함수는 재귀 함수로 for문을 통해 모든 케이스의 숫자 조합을 탐색한 후, 소수이고 answer 배열에 없는 숫자이면 answer 에 push 한다.
  const getPermutation = (arr, fixed) => {
    if(arr.length >= 1){
      for(let i =0; i<arr.length; i++){
        const newNum = fixed + arr[i]
        const copyArr = [...arr]
        copyArr.splice(i,1)
        if(!answer.includes(+newNum) && isPrimeNum(+newNum) answer.push(+newNum)
          getPermutation(copyArr, newNum)
      }
    }
  }
  getPermutation(nums, '');
  return answer.length;
}

// 예제 ) numbers = "17" 인 경우
// nums 배열에 ['1', '7']이 할당 되고, getPermutation 함수는 nums 배열의 요소를 for 문을 통해 순차적으로 순회한다.
// 가장 처음에 0번 인덱스인 '1'을 nums 배열에서 가져온 다음(원본 배열을 변경하지 않기 위해 얕은 복사를 사용) '1'을 제외한 나머지 요소들을 탐색하면서 숫자 조합을 생성하고,
// 숫자 조합이 소수인지 그리고 answer 배열에 없는 함수인지 확인 후, 두 조건을 충족한다면 answer 배열에 push 한다.
// 이 과정에 따라 가장 처음 만들어진 조합인 1은 소수가 아니니 answer에 push 되지 못한다. 그 다음 조합은 17로 소수이며 answer 배열에 존재하지 않으니 push 한다.
// 그리고 7도 소수이며 answer 배열에 부재하니 push 하고, 마지막으로 71도 소수이며 answer 배열에 없으니 push 한다.
// 결과적으로 answer 배열에는 [17, 7, 71]이 존재하게 되며, 문제에서는 몇 개의 소수를 만들 수 있는지 물었으니 answer.length를 반환 하면 된다. 

function solution(n){
  let arr = [0, 1, 2];
  for(let i = 3; i <= n; i++){
    arr[i] = (arr[i-2] + arr[i-1]) % 1234567
  }
  return arr[n] % 1234567
}


// 전체 로직) 
// n이 1이면 1, n이 2면 2, n이 3이면 3이고, n이 4일 때 5라는 점을 고려 했을 때, 피보나치 수열의 규칙을 따른다.
// 따라서 arr[i]에 들어갈 수는 arr [i-2] + arr[i-1]로 찾으면 된다는 간단한 문제였다.

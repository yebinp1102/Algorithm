// 설명 1
function solution(arr) {
 return arr.reduce((a,b) => a*b / gcd(a,b))  
}

// 설명 2
function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}

// 전체 로직 :
// 3개 이상의 수의 최소 공배수를 구할 때는 2개의 숫자의 최소 공배수 L1을 구하고, L1과 나머지 숫자 중 하나의 최소 공배수 L2을 구하며, 이 과정을 배열 끝까지 반복한다.
// 예를 들어, arr 배열이 [2,6,8,14]라면 가장 먼저 2와 6의 최소 공배수 6을 구하고, 6과 8의 최소 공배수인 24를 구하며, 24와 14의 최소 공배수인 168을 최종적으로 반환한다.

// 설명 1.
// solution 함수는 arr 배열을 순차적으로 탐색 하면서, 2개의 숫자의 최소 공배수를 구한 다음 누적해서, 다음 수와의 최소 공배수를 구한다.
// arr 배열을 순차적으로 탐색 하기 위해 for 문 대신 reduce 메서드를 사용했다. 
// 참고로 2개의 수의 최소 공배수를 구하기 위해서는 두 수의 최대 공약수를 구해야 하며, 이를 구하는 로직은 gcd라는 함수를 별도로 만들어 구현했다.

//설명 2.
// gcd 함수는 유클리드 호제법을 사용해서 두 수의 최대 공약수를 반환한다. 

// 풀이 참고 자료 :
// https://developerm.tistory.com/175

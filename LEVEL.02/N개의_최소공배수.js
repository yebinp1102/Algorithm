function solution(arr) {
 return arr.reduce((a,b) => a*b / gcd(a,b))  
}

function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}


// 3개 이상의 정수 최소 공배수 구하는 방법 참고:
// https://developerm.tistory.com/175

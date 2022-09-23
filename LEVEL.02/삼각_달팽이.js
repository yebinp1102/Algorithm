function solution(n) {
  const arr = Array.from(Array(n), (el, i) => Array(i+1))
  const max = n * ( n + 1 ) / 2, idx = [0, 0];
  let type = 1, cur = n, count = 0;
  for ( let i = 1; i <= max; i++ ) {
    arr[idx[0]][idx[1]] = i;
    count++
    if ( cur === count ) {
      type = type === 3 ? 1 : type + 1
      count = 0;
      cur -= 1;
    }
    switch ( type ) {
      case 1:
        idx[0] += 1
        break;
      case 2:
        idx[1] += 1
        break;
      case 3:
        idx[0] -= 1
        idx[1] -= 1
        break;
    }
  }
  return arr.flat()
}

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/68645

// 문제 상세 풀이 : https://blog.naver.com/yebinp1102/222882660753

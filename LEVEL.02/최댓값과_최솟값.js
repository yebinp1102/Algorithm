function solution(s){
  const splitToArr = s.split(' ');
  const min = Math.min.apply(null, splitToArr);
  const max = Math.max.apply(null, splitToArr);
  return `${min} ${max}`;
}

// 참고로 apply 메서드의 첫번째 인자는 this 바인딩 해야할 객체가 없기 때문에 null로 설정 했으며,
// apply 메서드를 사용하 이유는, Math.max()의 인자는 반드시 숫자여야 하기 때문에 배열인 splitToArr를 전달하면 NaN를 반환한다.
// 따라서 배열의 요소 중 최소 값과 최대 값을 찾고 싶다면 apply 메서드를 사용해야마 한다. 

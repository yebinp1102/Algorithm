function solution(brown, yellow){
  let sum = brown + yellow 
  // 여기서 i는 높이를 의미 한다. i가 3부터 시작하는 이유도 높이의 최소 값이 3이기 때문.
  for(let i = 3; i<= brown-3; i++){
    if(sum % i === 0 ){
      let width = sum / width;
      if( (width - 2) * (height -2 ) === yellow) return [width, height];
    }
  }
}

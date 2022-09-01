function solution(n){
  let answer = [];
  const hanoi = (num, start, mid, end) => {
    if(num === 1) answer.push([start,end]);
    else{
      hanoi(num-1, start, end, mid);
      answer.push([start, end]);
      hanoi(num-1, mid, start, end);
    }
  }
  hanoi(n,1,2,3); 
  return answer;
}


// 전체 로직 설명 )
// 하노이의 탑 문제는 대표적인 재귀 함수 문제이다. 

// 만약 원판이 n개 일 때, 가장 큰 원판이 end 기둥의 가장 밑에 깔려야 한다.
// 이를 위해서는 start 기둥엔 n번째 원판 1개, mid 기둥엔 n번째 원판을 제외한 나머지 모든 원판, 그리고 end 기둥엔 아무것도 없어야 한다.
// 그리고 n번째 원판을 제외한 mid의 가장 아래 있는 n-1번째 원판을 end 기둥의 n번째 원판 위에 오게 해야 한다. 

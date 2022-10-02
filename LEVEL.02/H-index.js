function solution(citations){
  const sorted = citations.sort((a,b) => b-a);
  let h = 0;
  while(h+1 <= citations[h]) h++;
  return h
}

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42747

// 로직 설명 )
// h = 0부터 성립하는 지 확인하고, 성립하면 h = 1이 성립하는지, 또 성립하면 h = 2도 성립하는지 확인하는 방식으로 h = 특정 숫자가 성립하지 않는 지점까지 h를 1씩 늘려간다.
// h = x가 성립한다는 말은 citaiotns 배열중 x번 이상 인용된 논문이 x개 이상이 true라는 의미이다.
// h = 0부터 1씩 늘려가는 이유는 문제에서 "최댓값"을 구하라고 했기 때문에, 반환 할 수 있는 가장 작은 수인 0을 시작으로 하나씩 탐색하는 것이다.
// 참고로 왜 h를 1이 아닌 0부터 탐색하는지 의문이 들 수 있는데, 이는 citations 배열의 모든 원소가 0일 때를 고려해야 하기 때문이다. 

// 입출력 예제와 홤께 이해 해보자.
// 입출력 예 : citations = [3,0,6,1,5];
// 가장 먼저 citations 배열을 내림 차순으로 정렬해야 하기 떄문에 sort 메서드를 사용해 [6,5,3,1,0]으로 정렬한다.
// 그리고 h = 0이 성립하는지 확인한다. h = 0이 성립한다는 말은 0번 인용된 논문이 0 개 이상이냐인데, 사실 h = 0은 무조건 성립한다. 
// h = 0이 성립하니, h = 1이 성립하는 지 확인해야 한다. h = 1도 성립한다.
// 이 과정을 반복 했을 때, h = 2와 h = 3까지 성립하지만 h = 4 부터는 성립하지 않는다. 따라서 답은 3이 되는 것이다.
function solution(cards){
  let cardsCopy = cards.slice() 
  const groupSize = []; // groupSize는 그룹별 숫자의 개수
  
  for(let i=0; i<cards.length; i++){
    if(cardsCopy[i] === 0) continue;
    let size = 0; // size는 한 그룹에 속하는 숫자의 개수
    let j = i+1; // j는 몇번째 박스인지 알려줌
    while(cardsCopy[j-1] != 0){ // j번째 박스가 0이 아닌 경우(=아직 선택되지 않은경우) 아래의 과정 반복
      size+=1; // size를 + 1
      let nextJ = cardsCopy[j-1]; // nextJ 변수에 다음 오픈할 박스의 인덱스 번호 할당
      cardsCopy[j-1] = 0;  // 선택된 박스를 표시하기 위해 선택한 박스의 숫자 0으로 변경
      j = nextJ  // 
    }
    groupSize.push(size); // while문을 빠져나오는 순간은 열어야 하는 박스가 이미 열린 경우이므로, size를 groupSize 배열에 추가.
  }
  
    // groupSize의 각 숫자는 그룹별 선택된 숫자의 개수이므로, 가장 큰 수 2개를 선택한 곱의 최댓값을 구하려면 내림 차순으로 정렬한 다음 0, 1번 인덱스를 곱하면 된다.
    groupSize.sort((a,b)=>b-a)
    // 하지만 가장 큰 2개의 수 중 하나가 0이거나 groupSize가 하나 밖에 없다면 항상 0을 반환해야 한다.
    if(groupSize[0] === 0 || groupSize[1] === 0 || groupSize.length === 1) return 0
    return groupSize[0] * groupSize[1]
}

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131130?language=javascript

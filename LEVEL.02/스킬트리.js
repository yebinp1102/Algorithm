function solution(skill, trees){
  let answer = trees.length;
  let newTrees = trees.map( tree => {
    return tree.split('').filter( x => skill.includes(x));
  })
  for(let i=0; i < newTrees.length; i++){
    for(let j=0; j < newTrees[i].length; j++){
      if(newTrees[i][j] !== skill[j]){
        answer --;
        break;
      }
    }
  }
  return answer;
}


// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/49993?language=javascript

// 전체 로직 설명 )
// trees 배열의 요소 개수(length) 중에서 선행 스킬 순서를 따르지 않는 배열을 발견할 때 마다 answer -- 한다. 
// 선행 스킬 순서를 따르는지 판별하기 위한 순서는 아래와 같다.
// 먼저, trees 배열의 각 요소를 split 메서드를 통해 각 문자로 분할 한 다음, skill에 있는 요소들만 따로 추출해서 newTrees에 할당한다.
// 예를 들어 skill = "CBD", trees = ["BACDE", "CBADF", "AECB", "BDA"]인 경우 newTrees에는 [["B","C","D"],["C","B","D"],["C","B"],["B","D"]]가 할당되는 것이다.
// 이제 이 newTress를 이중 for문으로 순회하면서 순성 맞게 배치 되어 있는지 확인하면 된다.
// 첫번째 for문은 newTrees 배열의 각 배열(=인덱스 요소)에 접근하기 위한 것이고, 두번째 for문은 각 요소의 각 알파벳이 순서와 동일한지 확인한다.
// 만약 동일하지 않으면 answer -- 와 함께 break 를 사용하여 뒤의 알파벳을 더이상 확인하지 않고 반복문을 탈출한다.
// 최종적으로 answer를 반환하면 선행 스킬 순서를 지킨 스킬 트리의 갯숙 출력되는 것이다.

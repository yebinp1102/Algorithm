function solution(k, dungeons){
  let answer = []
  let visited = Array(dungeons.length).fill(0)
  function DFS(count, k){
    answer.push(count)
    for(let i=0; i<dungeons.length; i++){
      let cur = dungeons[i]
      if(k>=cur[0] && !visited[i]){
        visited[i]=1;
        DFS(count + 1, k - cur[1])
        visited[i]=0
      }
    }
  }
  DFS(0, k)
  return Math.max(...answer)
}

// 문제 접근 방식 : DFS 
// DFS를 통해 피로도 k로 몇번의 던전을 탐험할 수 있는지 모든 경우의 수를 찾고, 모든 경우의 수들은 answer에 담는다.
// answer 중 가장 큰 값을 지닌 요소가 유저가 피로도 k로 탐험하 수 있는 최대 던전 수다.

// 만약 k=80, dungeons = [[80,20],[50,40],[30,10]] 인 경우
// answer에는 최종적으로 [0,1,2,2,3,1,2,1,2] 배열이 저장 된다.
// 함수 solution은 answer 배열의 요소 중 가장 큰 값인 3을 반환한다. 

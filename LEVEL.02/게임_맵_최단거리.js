// 최단 거리 문제이므로 BFS 탐색 알고리즘 채택


function solution(maps){
  // 상 하 우 좌 -> 이 방향으로 길 탐색
  const dx = [0, 0, 1, -1]
  const dy = [1, -1, 0, 0]
  // queue는 현재 좌표와 지나온 칸의 개수 정보를 갖고 있음. 초기 값 [0,0,1]은 각각 y좌표 x좌표 지나온 칸의 수를 의미
  let queue = [[0,0,1]]
  
  // while 문이 종료되는 순간은 더이상 앞으로 나아가지 못할 때.
  while(queue.length){
    const cur = queue.shift();
    // 목적지에 도착한 경우 이떄까지 지나온 칸의 개수 반환. 
    if(cur[0] === maps.length -1 && cur[1] === maps[0].length -1 ) return cur[2]
    // 설명 1 참고
    for(let i=0; i<4; i++){
      const yy = cur[0] + dy[i]
      const xx = cur[1] + dx[i]
      if(xx>=0 && yy>=0 && xx<maps[0].length & yy<maps.length && maps[yy][xx] === 1){
        maps[yy][xx] = 0;
        queue.push([yy, xx, cur[2] +1]);
      }
    }
  }
  return -1
}



// 설명 1 : 다음 칸으로 이동하기 위한 조건
// 1) x좌표와 y좌표가 0보다 크거나 같다
// 2) x좌표와 y좌표가 maps의 가로 세로 길이보다 작다.
// 3)다음 칸이 반드시 벽(0)이 아닌 길(1)이어야 한다.
// 4) 이미 지나온 길이 아니다.

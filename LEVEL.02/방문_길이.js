function solution(dirs){
  // 좌표값 DULR를 객체 타입 데이터로 저장.
  const moves ={D:[0, -1],
                U: [0, 1],
                L: [-1, 0],
                R: [1, 0]}
  let check = new Set() // 중복을 허용하지 않는 set 객체의 특성 활용하기 위해 set 객체 생성
  let now = [0, 0] // now는 dirs를 하나씩 순회 할 때 도착하는 좌표 의미
  
  // dirs를 하나씩 순회
  for(let i=0; i<dirs.length; i++){
    let nx = now[0] + moves[dirs[i]][0]  // nx는 dirs[i]만큼 움직였을 때 도착하는 x좌표 
    let ny = now[1] + moves[dirs[i]][1]  // ny는 dirs[i]만큼 움직였을 때 도착하는 y좌표 
    if(nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;  // 제한 좌표(x, y 축 모두 5이하 -5이상)를 넘어가는 경우엔 카운트 하지 않음
    check.add(""+now[0]+now[1]+nx+ny)  // 아래 설명 1 참고
    check.add(""+nx+ny+now[0]+now[1])
    now = [nx,ny] // check에 지나온 경로를 기록하고 현재 좌표를 갱신
  }
  return check.size/2  // 중복 경로를 제거하기 위해 check의 갯수 나누기 2
}

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/49994

// 설명 1)
// check 변수에는 set 객체가 할당 되어 있는데, 이 set 객체에는 좌표를 움직일 때마다 어느 경로로 움직였는지 기록하기 위한 데이터가 저장된다. 
// 이때 이 데이터는 시작좌표+도착좌표를 문자열 타입의 데이터이다. 예를 들어 [0, 0]에서 [0, 1]로 이동한 경우 check에 "0001"이 추가 되는 것이다. 
// 그리고 [0, 0] -> [0, 1]과 같이 이동한 것과 [0, 1] -> [0, 0]으로 이동한 것은 문제 상에서 동일한 것으로 취급한다. 따라서 "0100" 또한 check에 추가 한다.
// 이렇게 중복 되는 길을 굳이 check에 추가하는 이유는 dirs가 UDU인 경우를 생각하면 이해된다. 
// dirs가 UDU인 경우 U->D 그리고 D->U는 같은 경로를 이동 하므로 2가 아닌 1을 반환해야 한다. 

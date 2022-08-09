function solution(N, road, K){
  // 설명 1
  let fastestWay = new Array(N+1).fill(Infinity)
  fastestWay[1] = 0;
  
  // 설명 2
  let roadInfo = Array.from({length: N+1}, () => [])
  road.forEach(([a,b,c]) => {
    roadInfo[a].push({to: b, dist: c});
    roadInfo[b].push({to: a, dist: c})
  })
  
  // 설명 3
  const queue = [{to: 1, dist:0}];
  while(queue.length){
    let {to, dist} = queue.pop();
    roadInfo[to].forEach( step => {
      if(fastestWay[step.to] > fastestWay[to] + step.dist){
        fastestWay[step.to] = fastestWay[to] + step.dist
        queue.push(step)
      }
    })
  }
  return fastestWay.filter( dist => dist <=k).length;
}

// 설명 1.
// fastestWay 변수는 배열 타입의 데이터를 가지며, 각 요소는 숫자이다. 이 숫자가 가르키는 것은 1번 마을에 다른 마을까지 배달하는 데 소요되는 최단 시간이다. 
// 예를 들어, fastestWay[2]의 값이 5라면, 1번 마을에서 2번 마을까지 소요되는 최단 이동 시간이 5라는 의미다.
// 참고로 fastestWay[1]의 값은 필요 없으니 0으로 초기화 해두었다.


// 설명 2.
// roadInfo 변수는 모든 도로 정보르 의미한다. 그리고 배열 타입의 데이터를 가지며, 요소로 또 배열을 갖는다. 그리고 각 요소(배열)에는 1개 이상의 객체 타입의 데이터가 할당된다. 
// 이 객체는 to와 dist라는 key 값을 갖고 있는데, to는 이동 가능한 마을을 의미하며, dist는 해당 마을로 이동하는데 걸리는 시간이다.
// 예를 들어 roadInfo[2]에 {to: 3, dist: 1}, {to: 4, dist: 3}이 할당 되어 있다고 가정했을 때, 2번 마을에서는 3번과 4번 마을로 이동할 수 있으며, 소요시간은 각각 1과 3인 것을 의미한다.
// 이 roadInfo 배열의 요소의 초기 값은 빈 배열이며, 도로 정보를 갖는 road 매개변수를 forEach 함수를 통해 업데이트 한다.
// 이 roadInfo 배열, 즉 모든 도로 정보가 필요한 이유는 fastestWay 배열을 만들기 위해서는 모든 경로를 완전 탐색해야 하기 때문이다.  


// 설명 3.
// fastestWay를 구하기 위해서 queue 배열을 생성하고 초기 값으로 {to: 1, dist:0}을 할당 했다. 이는 시작 지점을 의미하며, queue에는 1번 마을에서 갈 수 있는 다른 마을들의 정보가 push 된다.
// 하지만 무조건 push 되는 것은 아니고, fastestWay[이동할 마을 번호]가 fastestWay[이동전 마을 번호] + 이동 하는데 걸리는 시간 보다 클 경우에만 push 되며, fastestWay[이동할 마을 번호]는 
// fastestWay[이동전 마을 번호] + 이동 하는데 걸리는 시간으로 재할당 된다.
// 이러한 과정을 queue 배열의 길이가 0이 될 때 까지 반복하면, fastestWay 변수에는 1번마을에서 다른 마을로 이동하는데 걸리는 최단 시간이 저장되기 때문에, K 이하의 요소가 몇 개 인지 찾아서 return 하면 된다. 




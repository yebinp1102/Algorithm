function solution(cacheSize, cities){
  let answer = 0; 
  let cache = [];
  const miss = 5;
  const hit = 1;
  
  if(cacheSize === 0) return miss * cities.length // 설명 1
  // 설명 2
  cities.forEach(city => {  
    city = city.toUpperCase();
    let idx = cache.indexOf(city) // 캐시에 없으면 -1 반환
    // 설명3
    if(idx > -1){ 
      cache.splice(idx, 1);
      answer += hit
    // 설명4
    }else{
      if(cacheSize <= cache.length) cache.shift();
      answer += miss
    }
    cache.push(city);
  })
  return answer;
}


// 설명 1.
// 문제에서 캐시의 사이즈(cacheSize)는 0~30이라고 했으니, 0일 수도 있다. 캐시 사이즈가 0이면 캐싱이 불가능 하니 모든 요소가 캐시 미스 할 수 밖에 없다.

// 설명 2.
// 배열의 각 요소르 순회 하면서, 대문자로 통일하고 캐시에 해당 요소가 캐싱 되어 있는지 없는지 확인한다.

// 설명 3.
// 캐시에 이미 요소가 캐싱 되었다면, 해당 요소를 가장 최신으로 캐싱하기 위해 splice 함수를 통해 캐시에서 찾아서 제거 한 다음, 다시 push 해서 최신화 한다.
// 이때는 1만큼의 실행 시간이 소요 되므로, answer에 hit를 더해주면 된다. 

// 설명 4.
// 캐싱. 되어 있지 않은 경우, 캐시에 push를 하는데, 이때도 조건이 있다. 만약 이미 캐시의 length가 cacheSize와 일치하거나 큰 경우, 빈 자리를 하나 만들어야 해당 요소를 push 할 수 있다.
// 이를 위해 캐시에서 가장 오랫동안 사용되지 않았던 요소를 제거하기 위해 shift 함수를 사용한다. 반면 캐시의 사이즈에 여분이 있다면 그냥 push 한다. 
// 이때는 5만큼의 실행 시간이 소요 되므로, answer에 miss를 더해주면 된다. 



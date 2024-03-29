function solution(people, limit){
  let answer = 0;
  people = people.sort((a,b) => b-a);
  for(let i=0, j=people.length-1; j<=j; i++, answer++){
    if(people[i]+people[j] <=limit) j--;
  }
  return answer;
}

// 가장 적은 보트르 쓰려면, 몸무게가 많은 사람 + 적은 사람이 효율적이다. 
// 예를 들어 people에 [80, 70, 30, 20]이 주어졌다면, 가장 몸무게가 많은 사람과 가장 적은 사람의 조합은 보트를 하나 밖에 요구하지 않는다. 
// 하지만 몸무게가 80인 사람이 보트에 탑승할 경우, 20을 제외하 어떠한 사람이 타도 무게 제한으 넘어 2개의 보트가 요구된다. 
// 따라서 몸무게가 가장 많은 사람이 앞에 오도록 배열을 정렬한다.
// 가장 무게가 많은 사람(배열의 첫번쨰 요소)과 몸무게가 가장 적은 사람(배열의 마지막 요소)의 합과 무게 제한(limit)을 비교.
// 만약 두사람의 합이 무게 제한보다 작으면, answer에 1을 더하고 두번째로 몸무게가 많은 사람고 두번째로 가벼운 사람의 합을 비교한다.
// 반면 무게 합이 제한을 넘을 경우 answer에 1을 더하고, 두번째로 무거운 사람과 가장 가벼운 사람의 몸무게와 무게 제한을 비교한다. 



// 투포인터로 풀이 (새로운 풀이 추가)
function solution(people, limit){
    let answer = 0;
    people.sort((a,b) => a-b);
    let right = people.length -1;
    let left = 0;
    while(left<right){
        if(people[left]+people[right] > limit){
            right--
        }else{
            right--;
            left++;
        }
        answer++
    }
    if(left===right) answer++;
    return answer;
}

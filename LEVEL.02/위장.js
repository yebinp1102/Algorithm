function solution(clothes) {
    let answer = 1;
    let hash = new Map();
    for(let i=0; i<clothes.length; i++){
        if(hash.has(clothes[i][1])) hash.set(clothes[i][1], hash.get(clothes[i][1])+1)
        else hash.set(clothes[i][1], 1)
    }
    for (let value of hash.values()) {
       answer *= value + 1
    }
    return answer - 1
}

// 코드 설명 
// 문제 타이틀 옆에 애초에 해시라고 적혀 있어서 다른 풀이 방식을 생각 하지 않고, clothes[i][1]을 key 값으로 설정하고 그 key 값에 해당하는 요소의 갯수를 value로 지정했다.
// 만약 clothes가 [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]인 경우, hash의 값은 최종적으로  같이 업데이트 된다.
// Map {"headgear" => 2, "eyewear" => 1}
// 이는 headgear가 2종류 eyewear를 1종류 갖고 있다는 의미이다. 

// 이제 이 hash 값을 기반으로 만들 수 있는 모든 경우의 수를 찾아야 한다.
// 위의 예제 clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]에서 구할 수 있는 조합은 총 5개로 아래와 같다.
// 1. yellow_hat
// 2. blue_sunglasses
// 3. green_turban
// 4. yellow_hat + blue_sunglasses
// 5. green_turban + blue_sunglasses

// 위의 경우를 생각해 보면 headgear에 속한 yellow_hat과 green_turban은 각각 입을 수도 안입을 수도 있기 때문에, 총 3가지 경우가 나온다.
// 1. green_turban을 선택 하는 경우
// 2. yellow_hat과을 선택 하는 경우
// 3. 둘 중 아무것도 선택 하지 않는 경우
// 그리고 eyewear에 속한 blue_sunglasses도 마찬가지로 선택될 수도 안 될 수도 있다.
// 1. 선택하거나
// 2. 선택하지 않거나

// 3가지 타입의 위장 도구를 기반으로 조합 할 수 있는 모든 경우의 수는 사실 3 * 2로 6가지 이지만, 문제에서는 최소 하나의 위장 도구를 사용해야 한다고 제한하고 있다.
// 따라서 6가지 경우의 수 중 headgear와 eyewear를 아무것도 선택하지 않은 경우는 제외 해야 하기 때문에 (모든 경우의 수 = 6) - 1이 solution 함수가 반환해야 하는 값이 된다.

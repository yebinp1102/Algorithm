// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42860?language=javascript

function solution(name) {
    let answer = 0;
    let minLength = name.length - 1;
  
    for(let i=0; i<name.length; i++){
        // 상하 이동 횟수
        let tmp = name.charCodeAt(i);
        if(tmp < 78) answer += tmp%65;
        else answer += 91-tmp;
      
        //좌우 이동 횟수
        let nextIndex = i+1;
        while(nextIndex < name.length && name.charCodeAt(nextIndex) === 65)
            nextIndex += 1;
        
        //BBBAAAAAABA인 경우는 다시 왼쪽으로 돌아가는 것이 더 빠르다.
        //처음 위치로 돌아간 횟수(i*2) + 문자열길이 - A가 연속으로 나오는 지점의 다음값
        minLength = Math.min(min, (i*2) + name.length - nextIndex);
        
    }
    answer += minLength;
    return answer;
}


// 부연 설명 
// 아스키 코드의 차트를 보면 A는 65, Z는 90이다. 즉 65~90은 A~Z를 의미한다. 
// A~Z의 가운데 숫자는 N으로 아스키 코드 78을 갖는다. 
// 이 아스키 코드는 매개변수 name의 각 문자열 요소에 도달하기 위해서 움직여야 하는 최소 횟수를 결정한다.
// 좌우 이동 횟수도 고려해야 하는 이유는 BBAAAAABA처럼 처음 두 B를 고른 다음 왼쪽으로 커서를 이동해서 끝에 2번째 B에 도달하는 것이 최소한으로 스틱을 움직일 수 있다. 
// 오른쪽으로 이동 할 때 최소 값은 매개변수 name의 길이이고, 왼쪽으로 이동할 때의 최소 값은 연속되는 A에 도달하기 전까지 횟수 + 문자열 길이 - A가 연속으로 나오는 지점의 다음 값으로 구한다.
// min 메서드로 이 두 값을 비교해서 가장 작은 값을 answer로 삼으면 된다. 




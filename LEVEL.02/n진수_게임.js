function solution(n, t, m, p) {
    var answer = '';
    let num = 0, binary = '';
    while (binary.length < t * m) {
        // 16진법일 경우 알파벳을 대문자로 변경. 
        binary += (num.toString(n).toUpperCase());
        ++num;
    }
    for (let i = p - 1; i < t * m; i += m) answer += binary[i];
    return answer;
}

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17687

// 전체 로직 : t * m 길이 만큼의 숫자(혹은 문자)를 모두 구한 다음에 p배수 번째에 있는 문자들만 answer 문자열에 추가 하면 되는 간단한 문제.

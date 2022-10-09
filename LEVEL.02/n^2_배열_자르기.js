function solution(n, left, right) {
    let answer = [];

    for (let i = left; i <= right; i++) {
        answer.push(Math.max(i % n, parseInt(i / n)) + 1)
    }

    return answer;
}

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/87390?language=javascript

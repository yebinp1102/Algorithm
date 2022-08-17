var memoryFactorial = {
    0: 1,
    1: 1
};

function factorial(n) {
    if (memoryFactorial[n] == undefined) {
        memoryFactorial[n] = n * factorial(n - 1);
    }
    return memoryFactorial[n];
}

function solution(n, k) {
    var arrNum = [];
    for (var i = 1; i <= n; i++) {
        arrNum.push(i);
    }
    var answer = [];
    k--;
    while (arrNum.length > 0) {
        var i = Math.floor(k / factorial(n - 1));
        k = k - (i * factorial(n - 1));
        n--;
        answer.push(arrNum[i]);
        arrNum.splice(i, 1);
    }
    return answer;
}

// 참고한 풀이 : https://kosaf04pyh.tistory.com/192

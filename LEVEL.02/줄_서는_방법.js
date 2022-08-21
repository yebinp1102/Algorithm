// 설명 1
let memoryFactorial = {
    0: 1,
    1: 1
};
function factorial(n) {
    if (memoryFactorial[n] == undefined) {
        memoryFactorial[n] = n * factorial(n - 1);
    }
    return memoryFactorial[n];
}

// 설명 2
function solution(n, k) {
    let arrNum = [];
    for (var i = 1; i <= n; i++) {
        arrNum.push(i);
    }
    let answer = [];
    k--;
    while (arrNum.length > 0) {
        // 설명 2-1
        let i = Math.floor(k / factorial(n - 1));
        k = k - (i * factorial(n - 1));
        n--;
        answer.push(arrNum[i]);
        arrNum.splice(i, 1);
    }
    return answer;
}


// 설명 1)
// factorial 함수는 매개변수 n의 팩토리얼, n! 값을 반환하는 함수이다.
// 이 factorial 로직은 수가 커지면 커질수록, 시간이 오래 걸린다.
// 팩토리얼 값, 예를 들어 2!이라거나 7!의 값은 항상 같다. 
// 따라서 메모이제이션을 응용해 같은 연산 작업을 여러버 반복하지 않고 필요한 값만 즉시 사용할 수 있도록 memoryFactorial 객체에 각 팩토리얼 값을 저장했다. 


// 설명 2)
// solution 함수는 n!개의 배열 조합 중 n번째 조합을 반환하는 함수이다. 
// n번째 조합을 구하기 위해서는 0번째 인덱스부터 n-1번째 인덱스까지 하나씩 구한다.
// 0번째 인덱스 값을 구하는 방법은 다음과 같다.
//    1. arrNum이라는 배열에 1부터 n까지의 요소를 push 한다.
//    2. k번째 조합의 0번째 인덱스를 구하기 위해 k를 (n-1)!로 나눈 값을 내림 해서 얻은 값을 변수 i에 저장하고 arrNum[i]를 answer 배열에 push 한다. (자세한 설명은 2-1 참고)
//    3. arrNum[i]를 arrNum에서 제거하고, 나머지 수의 조합 다음 answer에 들어갈 수를 찾기 위해 i, k, n을 변경해서 같은 로직으로 찾는다.
//    4. 이 과정은 arrNum가 빈 배열이 될 때 까지 반복 한다.


// 설명 2-1)
// i는 answer 배열에 push 할 arrNum[i]를 위해 사용되는 변수 이다.
// 만약 n=3, k=5인 경우, 가장 처음 while문 내부 변수 i에는 2가 할당되고, 이로 인해 answer 배열에는 arrNum[2]인 3이 push 된다.
// 즉 6가지의 조합 중 5번쨰 조합의 가장 첫 숫자는 3이 되는 것이다.
// 이후 n을 -1 하며, k는 k 값에서 i * (n-1)!을 뺀 값이 된다.
// 이때, i * (n-1)! 은 answer에 있는 수를 제외한 나머지 조합 중 몇번째 조합인 지를 의미한다.
// 예를 들어 n=3, k=5인 경우, answer 배열의 가장 처음 3이 push 되고 나면, 남는 조합의 경우의 수는 [3,1,2]와 [3,2,1]로 총 2가지 이며, 반환해야 하는 5번째 조합은 [3,1,2]이다.
// 따라서 while문의 첫번째 반복문에서 k의 값은 0이 된다. 



// 참고한 풀이 : https://kosaf04pyh.tistory.com/192

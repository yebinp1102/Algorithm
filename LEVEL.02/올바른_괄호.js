function solution(s){
    let queue = [];
    for(let i =0; i<s.length; i++){
        if(s[i] === '(') queue.push(s[i])
        else {
            if(queue.length === 0) return false;
            queue.pop()
        }
    }

    return queue.length ? false : true;
}

// 전체 로직 )
// s 문자열의 요소 하나하나를 탐색하면서 '('가 나오면 queue에 push 하고, ')'가 나오면 queue와 짝이 맞으니 queue에 있는 '('을 하나씩 pop 한다.
// 만약 짝이 맞다면 queue에는 아무것도 남지 않으니 queue.length가 0인 경우엔 true 아닌 경우엔 false를 반환한다.
// 추가로 고려한 점은 '('와 ')'의 갯수가 일치하지 않는 것이다. 
// 만약 '('가 ')'보다 많다면 queue의 length가 1 이상이라 문제없이 false를 반환하지만, ')'가 더 많은 경욷 생각해야 한다.
// 이러한 경우엔 queue에 아무것도 없는 상태에서 pop을 시도 할테니, queue.length가 0인 경우 ')'를 만났다면 즉시 false를 return 하면 된다. 

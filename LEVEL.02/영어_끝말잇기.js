function solution(n, words){
  let idx = 0;
  for(let i = 0; i<words.length; i++){
    // 앞 단어와 뒷 단어의 연결 x인 경우
    if(i !==0 && words[i][0] !== words[i-1][words[i-1].length-1]){
      idx = i + 1;
      return [ idx % n === 0 ? n : idx % n, Math.ceil(idx/n) ]
    }
    for(let j = i -1; j >=0; j--){
      // 중복 단어 등장하는 경우
      if(words[i] === words[j]){
        idx = i + 1;
        return [ idx % n === 0 ? n : idx % n, Math.ceil(idx/n) ]
      }
    }
  }
  return [0, 0]
}


// 로직 설명 )
// 게임이 끝나는 경우는 앞단어의 맨 뒷 문자와 뒷 단어의 맨 앞 문자가 다른 경우거나, 중복 된 단어가 등장하는 경우이다.
// 따라서 2가지 경우에 따라 반환할 결과를 작성해주기만 하면 된다.

// 먼저 앞, 뒤 단어가 일치하지 않는 경우엔 해당 단어가 몇 번째 단어인지 찾는다. 여기서 기준은 뒷 단어!
// 그 단어가 words 배열의 인덱스 몇번에 위치하는지 찾았으면 idx 변수에 그 값의 + 1을 해서 저장한다. 
// 그리고 idx / n을 했을 때 나머직 없으면 [ n, Math.ceil(idx/n) ]을 반환하고,
// 나머지가 있으면 [ idx % n, Math.ceil(idx/n) ]을 반환한다.

// 중복 단어가 등장하는 경우에는 현재 탐색 기준이 되는 단어의 인덱스 번호를 기준으로 앞에 있는 모든 단어들을 탐색하면서 기준인 단어와 일치하는지 찾고, 
// 만야 일치한다면 첫번째 경우와 같이 기준 단어의 인덱스 번호 + 1한 값을 idx에 저장한 다음
// idx / n을 했을 때 나머직 없으면 [ n, Math.ceil(idx/n) ]을 반환하고,
// 나머지가 있으면 [ idx % n, Math.ceil(idx/n) ]을 반환한다.

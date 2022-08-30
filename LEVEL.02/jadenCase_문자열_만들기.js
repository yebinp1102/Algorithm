function solution(s){
  let arr = s.toLowerCase().split(' ');
  for(let i=0; i<s.length; i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }
  return arr.join(' ');
}


// 전체 로직)
// 문제에서 각 단어의 첫 문자만 대문자로 변경하라고 했으니, 나머지 문자들은 소문자여야 한다. 
// 따라서 처음에 모든 문자열 소문자로 바꾼다.
// 그리고 각 단어를 구별하기 위해서 임시적으로 배열에 각 단어를 저장하며, 이는 split 메서드를 사용했다.
// 예를 들어 s = "for the last week" 인 경우, arr 배열에는 ["for", "the", "last", "week"]가 할당된다. 
// 이후 for 문을 통해 각 단어에 접근 한 다음, 첫번째 문자를 toUpperCase 메서드를 통해 대문자로 바꾸고 나머지 문자열을 첫번째 문자열 뒤에 추가해서 해당 인덱스번째 단어를 갱신했다.
// 참고로 첫번째 문자에 접근할 때는 charAt 메서드를 사용 했으며, 나머지 문자은 첫번째 문자를 제외한 나머지이기 때문에 slice 메서드를 사용했다. 
// 이 과정이 끝나면 배열을 다시 문자열로 바꾸기 위해서 join(' ')을 작성했다. 

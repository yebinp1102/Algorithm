function solution(s){
  let answer = [0,0];
  
  // s가 "1"이 될 때 까지 반복
  while(s !== "1"){
    let oldLen = s.length;
    s = s.replace(/0/g, "");
    let newLen = s.length;
    s = newLen.toString(2)
    answer[1] += oldLen - newLen;
    answer[0] ++
  }
  
  return answer;
}

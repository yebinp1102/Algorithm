function solution(msg){
  let answer = [];
  let dictionary = ['']
  for(let i = 65; i < 91; i++) dictionary.push(String.fromCharCode(i));
  for(let i = 0, j; i < msg.length; i=j){
    let w = msg[i];
    for(j = i+1; j<msg.length; j++){
      let c = msg[j];
      if(!dictionary.includes(w+c)){
         dictionary.push(w+c);
         break;
      }
    w += c
    }
    answer.push(dictionary.indexOf(w));
  }
return answer;
}

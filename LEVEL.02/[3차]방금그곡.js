function solution(m, musicinfos) {
  const getMinutes = s => s.substr(0, 2) * 60 + +s.substr(3); // 어떤 시간을 분으로 바꾼 것이다. 만약 1:30이라면 90분으로 표현.
  m = m.replace(/\w#/g, a => a[0].toLowerCase()); // #이 붙은 알파벳 구분하기 위해 #앞에 오는 알파벳은 소문자로 구분. 만약 Aa라면 A, A#라는 의미.
  
  
  let answer = musicinfos.map(info => {
    info = info.split(','); // 하나의 곡에 해당하는 여러 정보에 접근하기 위해 하나의 문자열로 이어진 데이터를 배열로 구분.
    let playTime = getMinutes(info[1]) - getMinutes(info[0]); // playTime : 재생에 걸리는 시간(분 단위)
    let melody = info[3].replace(/\w#/g, a => a[0].toLowerCase()); // melody도 m과 마찬가지로 #앞에 알파벳 소문자로 구분. Bb면 B, B#의미.
    melody = playTime > melody.length ?  // melody의 길이가 재생시간보다 길다면 melody를 재생시간만큼 자르고, 짧다면 melody에 추가된 시간 만큼 melody의 일부 추가해서 melody에 재할당
      melody.padEnd(playTime, melody) : melody.substr(0, playTime);
    return {playTime, melody, name: info[2], startTime: getMinutes(info[0])}; // 조건에 부합하는 곡이 여러개 찾는 경우를 대비해서 melody, 재생시간, 시작시간, 곡명을 저장해둔다.
   }).filter(info => new RegExp(m).test(info.melody)); // m과 일치하는 문자열이 melody에 존재하는 배열만 answer에 저장.
  
  
  if (answer.length) {
      if (answer.length > 1) { // 여러개의 일치하는 곡이 있는 경우, 재생시간(playTime)이 가장 긴 음악을 찾음
          answer = answer.filter(v => v.playTime >= Math.max(...answer.map(val => val.playTime)));
          if (answer.length > 1) { // playTime도 일치하면 시작시간(startTime)이 가장 이른 곡을 찾음
              answer = answer.filter(v => v.startTime <= Math.min(...answer.map(val => val.startTime)));
          }
      }
      return answer[0].name;
  }
  return "(None)";
}


// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17683?language=javascript

function solution(files){
  return files.sort((a,b) => {
    const findStr = /^\D+/
    const aHead = a.match(findStr)[0].toLowerCase();
    const bHead = b.match(findStr)[0].toLowerCase();
    
    if(aHead < bHead) return -1;
    if(aHead > bHead) return 1;
    
    const findNum = /\d+/
    const replaceZero = /^0+/
    const aNum = a.match(findNum)[0].replace(replaceZero, '');
    const bNum = b.match(findNum)[0].replace(replaceZero, '');
    
    return aNum - bNum
  })
}

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17686

// 문제 상세 설명 링크 : https://blog.naver.com/yebinp1102/222881145145

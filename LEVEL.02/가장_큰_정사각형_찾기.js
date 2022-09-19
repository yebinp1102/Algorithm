function solution(board) {
  let answer = 0;
  if (board.length === 1) return Math.max.apply(null, board[0]);
  for (let i = 1; i < board.length; i++) { 
    answer = Math.max(answer, board[i][0]);
    for (let j = 1; j < board[0].length; j++) { 
      if (board[i][j] === 1){
        board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }
  return answer ** 2;
}


// 예시 1)
// board = [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]] 일떄 16 반환

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12905

// 문제 상세 풀이 : https://blog.naver.com/yebinp1102/222878501319

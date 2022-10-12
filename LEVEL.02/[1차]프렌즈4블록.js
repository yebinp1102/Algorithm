function solution(m, n, board){
  board = board.map((row) => Array.from(row));
  
  while(true){
    const find = [];
    
    // 2 * 2 중복 있는지 확인. 있으면 [y, x]좌표 find에 push
    for(let y=0; y<m-1; y++){
      for(let x=0; x<n-1; x++){
        const pick = board[y][x]
        if(pick &&
          pick === board[y][x+1] &&
           pick === board[y+1][x+1] &&
           pick === board[y+1][x]
          ) find.push([y,x])
      }
    }
    
    // 터지는 블록은 0으로 변경
    find.forEach(([y,x]) =>{
      board[y][x] = 0;
      board[y+1][x] = 0;
      board[y][x+1] = 0;
      board[y+1][x+1] = 0;
    })
    
    // 터진 블록의 자리 제거하고 위에 있는 블록 아래로 내려오게
    for(let y=m-1; y>=0; y--){
      for(let x=0; x<n; x++){
        for(let i=y-1; i>=0; i--){
          if(board[y][x]) break;
          if(board[i][x]){
            board[y][x] = board[i][x];
            board[i][x] = 0
            break
          }
        }
      }
    }
    
    // 0의 총 갯수 = 터진 블록의 수
    if(!find.length) return board.flat().filter(v=>!v).length;
  }

}

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17679?language=javascript



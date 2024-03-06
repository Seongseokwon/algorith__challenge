// 첫번째 풀이 테스트케이스 11~15 시간초과
const incorrect_solution = (k, m, score) => {
  let answer = 0;

  score.sort((a, b) => b- a);
    
    
    while(score.length) {
        const temp = score.splice(0, m);
        if(temp.length === m) {
          answer += m * temp[temp.length-1]
        }
    }
 
  return answer;
}

function correct_solution(k, m, score) {
  let answer = 0;

  score.sort((a, b)=> b-a)

  for(var i=0; i<score.length; i+=m) {
      let temp = score.slice(i, i+m)

      if(temp.length == m) {
          answer += m * temp[temp.length-1];
      }
  }

  return answer;
}


solution();
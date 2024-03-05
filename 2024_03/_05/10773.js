const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./10773.txt').toString().split('\n').map(Number);

/**
 *  첫번째 줄에 정수 K
 *  이후 K개의 줄에 정수가 1개씩 주어진다.
 *  정수가 0이 들어오면 최근에 쓴 수를 지우고 아닐경우 해당 수를 쓴다. 
 */
const solution = () => {
  const stack = [];
  const line = input[0];
  
  for(let i = 1; i < line + 1; i++) {
    if(input[i] === 0) {
      stack.pop();
    } else {
      stack.push(input[i]);
    }
  }
  console.log(stack.reduce((a, b) => a + b, 0));
}

solution();
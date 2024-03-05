const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./9012.txt').toString().split('\n');


/**
 * 괄호가 짝이 맞는지 확인하여 짝이 맞다면 YES 아니면 NO
 */
const solution = () => {

    let stack = [];
    const line = Number(input[0]);
    let result = '';
    let isError = false;
    for(let i = 1; i < line + 1; i++) {
      isError = false;
      for(let j = 0; j <input[i].length; j++) {
        if(input[i][j] === ')') {
          if(stack.length === 0) {
             result += 'NO\n';
             isError = true;
             break;;
          } else stack.pop();
        }
        else stack.push(input[i][j]);
      }
      if (!isError) {
        if(stack.length === 0) result += 'YES\n';
        else result += 'NO\n';
      }
      
      stack = [];
    }
    console.log(result);
}


solution();
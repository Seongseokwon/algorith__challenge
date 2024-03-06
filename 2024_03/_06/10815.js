const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./10815.txt').toString().split('\n');

const solution = () => {
  const result = []
  const numberMap = new Map();
  input[1].split(' ').forEach(strN => {
    numberMap.set(Number(strN), "");
  })

  input[3].split(' ').forEach(strN => {
    if(numberMap.has(Number(strN))) {
      result.push(1);
    }else {
      result.push(0)
    }
  })
  
  console.log(result.join(' '));
}


solution();
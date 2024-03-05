const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./28278.txt').toString().split('\n')
/**
 * 입력으로 주어지는 명령을 처리하는 프로그램 작성하기
 * 
 * 1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
 * 2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
 * 3: 스택에 들어있는 정수의 개수를 출력한다.
 * 4: 스택이 비어있으면 1, 아니면 0을 출력한다.
 * 5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.
 */
const solution = () => {
  
  class Stack {
    constructor() {
      this.stack = [];
    }
    pushNum(num){
      this.stack.push(num);
    }
    // 2
    popAndPrint() {
      if(this.stack.length !== 0) {
        const popV = this.stack.pop();
        return popV
      } else {
        return -1;
      }
    }

    // 3
    size() {
      return this.stack.length;
    }

    // 4
    isEmpty() {
      return this.stack.length === 0 ? 1 : 0;
    }

    // 5
    printTop() {
      if(this.stack.length !== 0) {
        return this.stack[this.stack.length - 1];
      } else {
        return -1;
      }
    }
  }

  let myStack = new Stack();
  const line = Number(input[0]);
  let result = "";
  
  for(let i = 1; i < line + 1; i++) {
    if(!isNaN(Number(input[i]))) {
      switch(Number(input[i])) {
        case 2:
          result += myStack.popAndPrint();
          break;
        case 3:
          result += myStack.size();
          break;
        case 4:
          result += myStack.isEmpty();
          break;
        case 5:
          result += myStack.printTop();
          break;
        default :
          break;
      }
      result += "\n";
    } else {
      const [a, b] = input[i].split(' ');
      myStack.pushNum(b);
    }
  }

  console.log(result);
}

solution();
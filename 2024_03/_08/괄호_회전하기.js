/**
 *
 * @param {string} s {}, [], () 괄호로 이루어진 문자열
 * @returns
 *
 * s를 x(0 <= x < s.length) 만큼 왼쪽으로 움직였을때,
 * 올바른 괄호문자열이 되게 하는 x의 개수를 구하시오
 *
 * queue를 이용하여 입력받은 문자열 s를 split()하여 저장후
 * 반복문을 돌면서 shift(), push()를 이용하여 좌측으로
 * 한칸씩 괄호를 움직여줬다.
 *
 * bracketCheck 함수를 만들어서
 * queue를 순회하면 bracketCheck안의 stack에 괄호를 넣어주면서
 * 닫히는 괄호가 들어올때 stack의 마지막 값과 비교하여 유효한지 검증
 *
 */
function solution(s) {
  var answer = -1;
  const queue = s.split("");

  const bracketCheck = () => {
    const stack = [];
    let isError = false;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] === "[" || queue[i] === "{" || queue[i] === "(")
        stack.push(queue[i]);
      else {
        switch (stack[stack.length - 1]) {
          case undefined:
            isError = true;
            break;
          case "[":
            if (queue[i] !== "]") isError = true;
            else stack.pop();
            break;
          case "{":
            if (queue[i] !== "}") isError = true;
            else stack.pop();
            break;
          case "(":
            if (queue[i] !== ")") isError = true;
            else stack.pop();
            break;
          default:
            break;
        }
        if (isError) break;
      }
    }
    if (stack.length !== 0) isError = true;
    return isError;
  };

  const check = [];
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      queue.push(queue.shift());
    }
    check.push(bracketCheck());
  }
  answer = check.filter((c) => !c).length;
  return answer;
}
solution();

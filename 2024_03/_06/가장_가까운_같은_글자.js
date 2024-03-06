/**
 * 
 * @param {string} s 입력받은 문자열
 * @returns {number[]} 문자열에 단어가 처음 나온경우 -1 아닌경우는 차이값
 * 
 * 문자열을 반복문을 돌리면서 array에 존재하는지 확인하면서 넣어줍니다.
 * 존재 하지 않은 경우 answer array에 -1을 push
 * 존재하는 경우 lastIndexOf를 이용하여 마지막 같은 문자열의 index를 찾고 현재 문자 index 에서 찾은 index를 빼서 push
 */
const solution = (s) => {
  const answer = [];
  const stack = [];

  for (let i = 0 ; i < s.length; i++) {
    if(stack.indexOf(s[i]) === -1) {
      answer.push(-1);
    } else {
      answer.push(i - stack.lastIndexOf(s[i]));
    }
    stack.push(s[i]);
  }
  return answer;
}


solution();
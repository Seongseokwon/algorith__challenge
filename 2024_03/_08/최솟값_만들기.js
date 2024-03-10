/**
 * 길이가 같은 두 배열에서 한개의 숫자씩 뽑아서 두수를 곱한 결과가
 * 최솟값이 되도록 함수를 작성하시오.
 *
 * @param {number[]} A
 * @param {number[]} B
 * @returns
 *
 * 작은값 * 큰값 을 한결과가 최솟값을 만들어 낼 수있다.
 *
 *
 */
function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

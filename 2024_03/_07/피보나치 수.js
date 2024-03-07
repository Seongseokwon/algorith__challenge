/**
 *
 * @param {number} n
 *  2 이상의 n이 입력되었을 때,
 *  n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수,
 *  solution을 완성해 주세요.
 *
 * 바텀업 방식의 dp를 활용하여 문제접근
 *
 */
function solution(n) {
  const dp = [];
  dp[0] = 0n;
  dp[1] = 1n;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return Number(dp[n] % 1234567n);
}

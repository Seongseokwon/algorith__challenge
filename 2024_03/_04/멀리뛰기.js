/**
 * 
 * @param {number} n 총 칸수
 * 
 * 1칸, 2칸 뛸 수 있다.
 * 총 칸수를 입력받았을 때, 몇가지 방법으로 끝에 도달할수 있는지 구하기.
 */
const 멀리뛰기 = (n) => {
  const diff = new Array(n).fill(0);

  diff[0] = 1n;
  diff[1] = 1n;
  diff[2] = 2n;  
  
  for(let i = 3; i <= n ; i++) {
    diff[i] = diff[i - 1 ] + diff[i - 2];
  }
  
  
  return Number(diff[n] % 1234567n);
}

module.exports = {멀리뛰기};
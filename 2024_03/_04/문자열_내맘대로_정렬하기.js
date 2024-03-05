/**
 * 
 * @param {string[]} strings 정렬하려는 문자열 배열
 * @param {number} n 정렬기준이 될 인덱스
 * 
 * strings를 map(), split()을 활용하여 2차원 배열로 변경시키고
 * 변경된 배열의 n 번째 문자를 기준으로 정렬한 후 다시 map(), join() 을 이용해서
 * 문자열 형태 배열로 반환한다.
 * 
 * 
 */
const incorrect_내맘대로정렬 = (strings, n) => {
  strings.sort();

  return strings
  .map(str => str.split(""))
  .sort((a, b) =>  a[n].charCodeAt() - b[n].charCodeAt())
  .map(str => str.join(""));
}

/**
 * 
 * @param {string[]} strings 
 * @param {number} n 
 * @returns {string[]} sorted strings
 * 
 * 입력받은 문자열배열을 사전순으로 우선 정렬을 한 후에,
 * 문자열의 n번째 문자의 유니코드를 반환 한다.
 * 
 * c.charCodeAt() c의 유니코드
 * str[2].charCodeAt() str의 2번째 문자의 유니코드
 * str.charCodeAt(2) str의 2번째 문자의 유니코드
 */
const correct_내맘대로정렬 = (strings, n) => {
  strings.sort();
  return strings.sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n))
}


module.exports = {incorrect_내맘대로정렬, correct_내맘대로정렬};
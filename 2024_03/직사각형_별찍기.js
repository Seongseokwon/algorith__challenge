/**
 * 
 * @param {number} n 가로 길이
 * @param {number} m 세로 길이
 * 
 * 가로길이 세로의 길이를 알 때, * 을 이용하여 직사각형 만들기
 */
const 직사각형별찍기 = (n, m) => {
    let result = "";

    for(let i =0  ; i < m; i++) {
        for(let j = 0 ; j < n; j++) {
            result += "*";
        }
        result += "\n";
    }

    return result;
}

module.exports = { 직사각형별찍기 };
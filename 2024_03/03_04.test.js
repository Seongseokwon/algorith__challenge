const { incorrect_내맘대로정렬, correct_내맘대로정렬 } = require("./문자열_내맘대로_정렬하기");

describe('3월 4일 문제 테스트', () => {
  it('내맘대로정렬1', () => {
    expect(correct_내맘대로정렬(["sun", "bed", "car"], 1)).toEqual(["car", "bed", "sun"]);
    expect(correct_내맘대로정렬(["abce", "abcd", "cdx"], 2)).toEqual(["abcd", "abce", "cdx"]);
    
  });
  
  it('내맘대로정렬2', () => {
    expect(incorrect_내맘대로정렬(["sun", "bed", "car"], 1)).toEqual(["car", "bed", "sun"]);
    expect(incorrect_내맘대로정렬(["abce", "abcd", "cdx"], 2)).toEqual(["abcd", "abce", "cdx"]);
    
  });
})
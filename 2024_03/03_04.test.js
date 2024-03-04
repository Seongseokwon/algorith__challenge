const { incorrect_멀리뛰기 } = require("./멀리뛰기");
const { incorrect_내맘대로정렬, correct_내맘대로정렬 } = require("./문자열_내맘대로_정렬하기");

describe('내맘대로_정렬하기', () => {
  it('Test Case 1', () => {
    expect(correct_내맘대로정렬(["sun", "bed", "car"], 1)).toEqual(["car", "bed", "sun"]);
    expect(correct_내맘대로정렬(["abce", "abcd", "cdx"], 2)).toEqual(["abcd", "abce", "cdx"]);
    
  });
  
  it('Test Case 2', () => {
    expect(incorrect_내맘대로정렬(["sun", "bed", "car"], 1)).toEqual(["car", "bed", "sun"]);
    expect(incorrect_내맘대로정렬(["abce", "abcd", "cdx"], 2)).toEqual(["abcd", "abce", "cdx"]);
    
  });
})

describe('멀리 뛰기', () => {
  it('Test Case 1', () => {
    expect(incorrect_멀리뛰기(4)).toBe(5);
  });

  it('Test Case 2', () => {
    expect(incorrect_멀리뛰기(3)).toBe(3);
  })
})
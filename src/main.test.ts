function add(x: number, y: number): number {
  return x + y;
}

// context를 사용하여 표현력을 높인다.
const context = describe;

describe('add 함수는', () => {
  it('두 숫자의 합을 리턴한다.', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('숫자를 리턴한다.', () => {
    expect(typeof add(1, 2)).toBe('number');
  });

  context('하나의 양수와 음수가 주어지면', () => {
    it('항상 하나의 양수보다 작은 값을 돌려준다.', () => {
      expect(add(1, -2)).toBeLessThan(1);
    });
  });
});

// 여러 예외 케이스들을 처리하면서 코드 표현력이 좋아진다.

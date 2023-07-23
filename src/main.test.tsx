// 테스트
function add(x: number, y: number): number {
  return x + y;
}

test('숫자 더하기', () => {
  expect(add(1, 2)).toBe(3);
});

function add(x: number, y: number): number {
	return x + y;
}

const context = describe;

describe('add 함수는', () => {
	it('두 숫자의 합을 리턴한다.', () => {
		expect(add(1, 2)).toBe(3);
	});

	context('두개의 양수가 주어졌을때', () => {
		it('항상 두개의 숫자보다 큰값을 돌려준다', () => {
			expect(add(1, 2)).toBeGreaterThan(1);
			expect(add(1, 2)).toBeGreaterThan(2);
		});
	});

	context('하나의 양수와 음수가 주어지면', () => {
		it('항상 하나의 양수보다 작은값을 돌려준다', () => {
			expect(add(1, -2)).toBeLessThan(1);
		});
	});
});

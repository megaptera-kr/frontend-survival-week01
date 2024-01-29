function add(x: number, y: number): number {
	return x + y;
}

const context = describe;

describe('Add 함수는', () => {
	context('두개의 양수가 주어졌을 때', () => {
		it('두 수의 합을 리턴한다.', () => {
			const result: number = add(1, 2);
			expect(result).toBe(3);
		});

		it('두 수의 합의 리턴 값의 타입은 number 이다.', () => {
			const result: number = add(1, 2);
			expect(typeof result).toBe('number');
		});
	});
});

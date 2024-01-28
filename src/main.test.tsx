function add(x: number, y: number): number {
	return x + y;
}

const context = describe;

describe('add func', () => {
	it('return a+b', () => {
		expect(add(1, 2)).toBe(3);
	});
});

function add (x:number , y: number):number {
    return x+y;
}

describe('add 함수', () => {
    it ('returns sum of two numbers')
    expect(add(1,2)).toBe(3);
})
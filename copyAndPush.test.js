import copyAndPush from './copyAndPush';

describe('copyAndPush', () => {
    it('it should add 4 to the list of numbers', () => {
        const numbers = [1, 2, 3];
        const num = copyAndPush(numbers, 4);
        expect(num).toEqual([1, 2, 3, 4]);
    });
    it('should keep the original array of numbers', () => {
        const numbers = [1, 2, 3];
        const num = copyAndPush(numbers, 5);
        expect(num).toEqual([1, 2, 3, 5]);
    });
});

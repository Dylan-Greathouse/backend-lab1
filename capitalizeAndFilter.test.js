import capitalizeAndFilter from './capitalizeAndFilter';

describe('capitalizeAndFilter', () => {
    it('Should captialize the first letter in string', () => {
        const strings = ['fire', 'map', 'corn', 'flask'];
        const newStrings = capitalizeAndFilter(strings);
        expect(newStrings).toEqual(['Map', 'Corn']);
    });
});

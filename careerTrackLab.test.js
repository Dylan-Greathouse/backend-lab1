import getName from './careerTrackLab';

describe('getName', () => {
    it('should return a name key from an object', () => {
        const dog = { name: 'spot', age: 5, weight: '20 lbs' };
        const name = getName(dog);
        expect(name).toEqual('spot');
    });
});

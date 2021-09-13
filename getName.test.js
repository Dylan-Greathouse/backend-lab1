import getName from './getName';

describe('getName', () => {
    it('should return a name key from an object', () => {
        const dog = { name: 'spot', age: 5, weight: '20 lbs' };
        const name = getName(dog);
        expect(name).toEqual('spot');
    });

    it('should return the name Aang', () => {
        const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
        const name = getName(character);
        expect(name).toEqual('Aang');
    });
});

import fetchQuotes from './fetchQuotes';

describe('fetchQuotes', () => {
    it('returns a single quote from futurama api', async () => {
        const quote = await fetchQuotes();
        expect(quote).toEqual({
            character: 'Fry',
            quote: 'Not everyone turns out like their parents. Look at me: my parents were honest,\nhard-working people.',
            image: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png',
        });
    });
});

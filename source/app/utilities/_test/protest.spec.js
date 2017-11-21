import protect from '../protect';

const STUB = 'STUB';

test('returns a protected object', () => {
	const result = protect(STUB);
	expect(result).toEqual({
		writable: false,
		enumerable: false,
		configurable: false,
		value: STUB
	});
});

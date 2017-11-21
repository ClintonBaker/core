import Store from '../Store';

const STUB = 'STUB';

const observablesSTUB = jest.fn();
const staticsSTUB = jest.fn();

const actionsSTUB = {
	do(store) {
		return () => {
			return STUB;
		}
	}
}

const gettersSTUB = {
	getter(store) {
		return STUB;
	}
}

test('creates a Store', () => {
	// const result = Store({
	// 	observables: observablesSTUB,
	// 	statics: staticsSTUB,
	// 	actions: actionsSTUB,
	// 	getters: gettersSTUB,
	// })

	// console.log(Object.keys(new result));

	// const properties = Object.getOwnPropertyNames(result);

	// expect(properties).toContain('actions');
});

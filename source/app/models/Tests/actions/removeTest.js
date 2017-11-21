export default (store) => {
	return ({ uid }) => {
		store.tests = store.tests.filter(test => {
			return test.uid !== uid;
		})
	}
}

type Test = {
	uid: string,
	type: string,
};

type TestsStoreObservables = {|
	tests: Test[],
		recording: boolean,
|};

export default (): TestsStoreObservables => {
	return {
		tests: [],
		recording: false,
	}
}

type TestsStoreStatics = {|
	testCount: number,
|};

export default (): TestsStoreStatics => {
	return {
		testCount: 0,
	}
}

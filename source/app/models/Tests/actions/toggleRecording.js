export default (store) => {
	return (...args) => {
		store.recording = !store.recording;
	}
}
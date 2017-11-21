import * as React from 'react';
import { shallow } from 'enzyme';

import ActionBar from '../ActionBar';

const mockStore = {
	recording: false,
	actions: {
		toggleRecording() { }
	}
}

test('renders correctly', () => {
	const component = shallow(<ActionBar $tests={mockStore} />);

	expect(component).toBeTruthy();
})
import * as React from 'react';
import { shallow } from 'enzyme';

import EventTypeBox from '../EventTypeBox';

test('renders correctly', () => {
	const component = shallow(<EventTypeBox type='mouse' />);

	expect(component).toBeTruthy();
})
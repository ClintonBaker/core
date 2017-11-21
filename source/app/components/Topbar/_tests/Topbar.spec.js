import * as React from 'react';
import { shallow } from 'enzyme';

import Topbar from '../Topbar';

test('renders correctly', () => {
	const component = shallow(<Topbar type='mouse' />);

	expect(component).toBeTruthy();
})
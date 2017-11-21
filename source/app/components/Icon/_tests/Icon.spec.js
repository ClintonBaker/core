import * as React from 'react';
import { shallow } from 'enzyme';

import Icon from '../Icon';

test('renders correctly', () => {
	const component = shallow(<Icon name='play' size='medium' />);

	expect(component).toBeTruthy();
})
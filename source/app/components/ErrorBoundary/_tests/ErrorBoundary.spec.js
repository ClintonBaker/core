import * as React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from '../ErrorBoundary';

test('renders correctly', () => {
	const component = shallow(<ErrorBoundary />);

	expect(component).toBeTruthy();
})
import nanoid from 'nanoid';

import TestModel from '@app/models/Test';
import { helpers } from '@app/models/Test';

export default (store) => {
	return (...args) => {
		store.tests.push(helpers.mockTest());
	}
}

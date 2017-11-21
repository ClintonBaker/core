import { Model } from '@app/utilities';
import nanoid from 'nanoid';

import * as actions from './actions';
import * as getters from './getters';
import statics from './statics';
import observables from './observables';

export default Model({
	actions,
	getters,
	statics,
	observables
});
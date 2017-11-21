import * as React from 'react';
import { observer, inject } from 'mobx-react';
import EventTypeBox from '@app/components/EventTypeBox';

import { Icon } from '@app/components/Icon';
import './styles/TestsList.css';

@inject('$tests')
@observer
export default class TestsList extends React.Component {
	render({ props, state } = this) {
		return (
			<div styleName='TestsList' className='scene'>
				<Icon name='plus' styleName='AddIcon' size='small' onClick={() => props.$tests.actions.addTest()} />
				{/*<Icons.Add styleName='AddIcon' width='24px' height='24px' onClick={() => props.$tests.actions.addTest()} gradient='green' />*/}
				<For each='test' of={props.$tests.tests}>
					<EventTypeBox type={test.type} key={test.uid} />
				</For>
			</div>
		)
	}
}

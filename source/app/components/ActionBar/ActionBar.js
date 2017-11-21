import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { Icon } from '@app/components/Icon';
import PlayIcon from '@app/assets/svgs/circle_play.svg';
import './styles/ActionBar.css';

@inject('$tests')
@observer
export default class ActionBar extends React.Component {
	render({ props, state } = this) {
		const { toggleRecording } = props.$tests.actions;

		return (
			<div styleName='ActionBar'>
				<div styleName='bar'>
					<div styleName='left'>
						<Choose>
							<When condition={!props.$tests.recording}>
								<Icon styleName='action' name='record' size='medium' onClick={toggleRecording} />
							</When>
							<Otherwise>
								<Icon styleName='action recording' name='record' size='medium' onClick={toggleRecording} />
							</Otherwise>
						</Choose>
						<Icon styleName='action' name='play' size='medium' />
						<Icon styleName='action' name='pause' size='medium' />
						<Icon styleName='action' name='stop' size='medium' />
					</div>
					<div styleName='right'>
						<Icon styleName='action' name='bookmark' size='medium' />
					</div>
				</div>
			</div>
		)
	}
}
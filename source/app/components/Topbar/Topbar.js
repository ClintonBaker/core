import * as React from 'react';
import { observer } from 'mobx-react';

import { Icon } from '@app/components/Icon';
import './styles/Topbar.css';

export default class Topbar extends React.Component {
	render({ props, state } = this) {
		return (
			<header styleName='Topbar'>
				<Icon name='android-done-all' size='medium' />
			</header>
		)
	}
}
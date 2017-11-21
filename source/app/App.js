import * as React from "react";

import { Topbar } from '@app/components/Topbar';
import { ActionBar } from '@app/components/ActionBar';
import { TestsList } from '@app/components/TestsList';
import "./styles/App.css";

class App extends React.Component {
	render({ props, state } = this) {
		return (
			<div styleName='body'>
				<div styleName='bottomShadow'>
					yolo
				</div>
				<Topbar />
				{/* TODO: Routng. */}
				<TestsList />
				<ActionBar />
			</div>
		);
	}
}

export default App;

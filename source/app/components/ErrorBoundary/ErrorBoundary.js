import * as React from 'react';

class ErrorBoundary extends React.Component {
	state = { error: null, info: null }

	componentDidCatch(error, info) {
		this.setState({ error, info });
	}

	render() {
		if (this.state.error) {
			console.log({ error: this.state.error.toString() });
			return <h1>Error: {this.state.error.toString()}</h1>
		}
		return this.props.children;
	}
}

export default ErrorBoundary;

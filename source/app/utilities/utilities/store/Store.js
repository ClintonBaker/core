import mobx, { observable, action, computed, extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import protect from './protect';

export default ({ statics, observables, actions, getters }) => Component => {
	return @observer class _Store extends React.Component {
		actions = {};

		constructor(props) {
			super(props);
			this.__applyActions({ actions });
			this.__applyGetters({ getters });
			this.__applyStaticData({ statics });
			this.__applyObservableData({ observables });
		}

		__applyActions = ({ actions }) => {
			const store = this;
			Object.entries(actions).forEach(([name, func]) => {
				store.actions[name] = action(func(store));
			});
		};

		__applyGetters = ({ getters }) => {
			const store = this;
			Object.entries(getters).forEach(([name, getter]) => {
				Object.defineProperty(store, name, {
					get: function() {
						return getter(store);
					},
				});
			});
		};

		__applyStaticData = ({ statics }) => {
			const store = this;
			Object.assign(this, statics);
			store.staticsKeys = Object.keys(statics);
		};

		__applyObservableData = ({ observables }) => {
			const store = this;
			extendObservable(this, observables);
			store.observablesKeys = Object.keys(observables);
		};

		get __renderData() {
			const keys = [...this.staticsKeys, ...this.observablesKeys];
			return keys.reduce((final, key) => {
				final[key] = this[key];
				return final;
			}, {});
		}

		render() {
			console.log('Store...', { store: this });
			return (
				<Component
					{...this.props}
					store={{
						actions: this.actions,
						data: this.__renderData,
					}}
				/>
			);
		}
	};
};

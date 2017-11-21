import mobx, { observable, action, computed, extendObservable } from 'mobx';
import protect from './protect';

export default ({ name = '', observables, actions, statics, getters }) => {
	return class _Store {
		actions = {};

		constructor(props) {
			this.props = props;
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
					get: function () {
						return getter(store);
					},
				});
			});
		};

		__applyStaticData = ({ statics }) => {
			const store = this;
			const staticsData = statics(store.props);
			Object.assign(store, staticsData);
			this.staticsKeys = Object.keys(staticsData);
		};

		__applyObservableData = ({ observables }) => {
			const store = this;
			const observablesData = observables(store.props);
			extendObservable(store, observablesData);
			this.observablesKeys = Object.keys(observablesData);
		};

		get __renderData() {
			if (this.observablesKeys || this.staticsKeys) {
				const keys = [...(this.staticsKeys || []), ...(this.observablesKeys || [])];
				return keys.reduce((final, key) => {
					final[key] = this[key];
					return final;
				}, {});
			}
		}
	}
}

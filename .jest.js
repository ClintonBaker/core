module.exports = {
	verbose: false,
	silent: true,
	setupFiles: ['./testSetup.js'],
	moduleNameMapper: {
		"\\.(css|svg)": "identity-obj-proxy"
	}

	// collectCoverage: true,
	// coverageDirectory: '.coverage',
};

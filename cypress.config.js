const webpackConfig = require('./config/webpack.config.cypress');
const { defineConfig } = require('cypress');
const cypressFirebasePlugin = require('cypress-firebase').plugin;

module.exports = defineConfig({
    viewportWidth: 1380,
    viewportHeight: 800,

    env: {
        apiKey: 'AIzaSyD5K1nYvIlgc1BMe_LjLD7EGVzI3r1D2FM',
        authDomain: 'guitarlink-66874.firebaseapp.com',
        projectId: 'guitarlink-66874',
        storageBucket: 'guitarlink-66874.appspot.com',
        messagingSenderId: '248988830543',
        appId: '1:248988830543:web:946191146db1d050f5133a',
        measurementId: 'G-N0W9JCW5TY',
    },

    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
            webpackConfig,
        },
        specPattern: ['cypress/component/*.cy.{js,jsx,ts,tsx}'],
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config);
            return cypressFirebasePlugin(on, config, {
                projectId: 'guitarlink-66874',
            });
        },
    },

    e2e: {
        baseUrl: 'http://localhost:8080',
        specPattern: ['cypress/e2e/*.cy.{js,jsx,ts,tsx}'],
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config);
            return cypressFirebasePlugin(on, config, {
                projectId: 'guitarlink-66874',
            });
        },
    },
});

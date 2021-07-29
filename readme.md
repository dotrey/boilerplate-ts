# Boilerplate TS

Boilerplate to setup development with TypeScript using [rollup.js](https://rollupjs.org/guide/en/) as bundler and [Mocha](https://mochajs.org/) with [Chai](https://www.chaijs.com/) for testing.

**Note**: Delete the `package-lock.json` before running `npm install` to fetch the freshest versions.

## Multiple Build Configurations
You can run `npm run build` to create the output file using `rollup.config.js`, or `npm run release` to use `rollup.release.config.js`. The release config can be used to overwrite some values of the default config.

## Testing
Run `npm run test` to execute all tests inside the `./src` folder.
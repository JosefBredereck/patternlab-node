// 'use strict';

import buildPatterns = require('../build');
import resolveConfig = require('../resolve-config');
import { Logger, wrapAsync } from '../utility';
// const { error, info, wrapAsync } = require('../utils');

// const build = options =>
//   wrapAsync(function* () {
//     try {
//       const config = yield resolveConfig(options.parent.config);
//       yield buildPatterns(config, options);
//       info(`build: Yay, your Pattern Lab project was successfully built ☺`);
//     } catch (err) {
//       error(err);
//     }
//   });

// module.exports = build;

export class Build {
  private logger = new Logger();

  constructor() {}
}

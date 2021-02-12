#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

require("..")
  .run()
  .catch((_error) => {
    process.exitCode = 1;
  });

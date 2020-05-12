#!/usr/bin/env node

require('..').run()
  .catch(_error => {
    process.exitCode = 1;
  })

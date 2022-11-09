const path = require("node:path")

module.exports = {
  "apps": [{
    "name": "ut45-backend",
    "script": "dist/server.js",
    "instances": 1,
    "exec_mode": "fork",
    "autorestart": true,
    "watch": false,
    "node_args": "--harmony",
    "max_memory_restart": "1G",
    "error_file": `${path.resolve()}/.logs/errors.txt`,
    "out_file": `${path.resolve()}/.logs/logs.txt`
  }]
};

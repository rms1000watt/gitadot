const spawn = require('child_process').spawn;

function gitadot() {
	var bin = spawn("git", ["add", "."]);

    bin.stdout.on('data', (data) => {
      console.log(`${data}`)
    });

    bin.stderr.on('data', (data) => {
      console.log(`${data}`)
    });
}

module.exports = gitadot;

var fs = require('fs');

fs.writeFile('hellow_world.html', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
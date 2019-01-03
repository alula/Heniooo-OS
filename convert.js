const fs = require('fs');
var data = fs.readFileSync(__dirname + '/fontdata.txt', 'utf8').split("\n");

var charData = [];

data.forEach(line => {
  if (line.startsWith(".") || line.startsWith("0")) {
    var s = line.split("");
    var i = 0;

    for (let index = 0; index < 8; index++) {
      if (s[index] == '0') {
        i |= 1 << index;
      }
    }
    charData.push(i);
  }
});

console.log(JSON.stringify(charData));

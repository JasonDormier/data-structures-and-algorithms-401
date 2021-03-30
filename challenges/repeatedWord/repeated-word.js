'use strict';

const hashTable = require('../hashTable/hashTable.js');

let repeat = (string) => {
  const table = new hashTable(1024);
  const matches = string.match(/((\b[^\s]+\b)((?<=\.\w).)?)/g);

  for (const match in matches) {
    let key = matches[match].toLowerCase();

    if (table.contains(key)) {
      return table.get(key);
    }
    table.add(key, key);
  }
};

module.exports = repeat;

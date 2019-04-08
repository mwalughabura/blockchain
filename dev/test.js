const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

bitcoin.createNewBlock(3211, 'MKJSDFAJOEWWR09', 'NOISDFOIJJ984ERSDSF');
bitcoin.createNewBlock(2311, 'LKNDFO98UE4R409EW', 'LJSD98U4R5O90LKJSDFO0');
bitcoin.createNewBlock(3211, 'JDFGSAIU9WRN09F90G', 'KJKJNIRI4RT8IILKDRRO0');

console.log(bitcoin);
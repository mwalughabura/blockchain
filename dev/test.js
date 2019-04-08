const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

// First test
// bitcoin.createNewBlock(3211, 'MKJSDFAJOEWWR09', 'NOISDFOIJJ984ERSDSF');
// bitcoin.createNewBlock(2311, 'LKNDFO98UE4R409EW', 'LJSD98U4R5O90LKJSDFO0');
// bitcoin.createNewBlock(3211, 'JDFGSAIU9WRN09F90G', 'KJKJNIRI4RT8IILKDRRO0');

// Second test
bitcoin.createNewBlock(2234, 'NKHOSDJF09KLNL', 'JKNSFDJROUNIOFD');

bitcoin.createNewTransaction(100, 'ALEXJSDLFJWROEW0', 'JENNJI98WRNI83');

bitcoin.createNewBlock(2324, 'NSOFOHJ0932NLDFS0', 'J9JODG094N09NRA');

bitcoin.createNewTransaction(100, 'ALEXJSDLFJWROEW0', 'JENNJI98WRNI83');
bitcoin.createNewTransaction(30, 'ALEXJSDLFJWROEW0', 'JENNJI98WRNI83');
bitcoin.createNewTransaction(2100, 'ALEXJSDLFJWROEW0', 'JENNJI98WRNI83');

bitcoin.createNewBlock(324, 'JKJNDF2NLDFS0', 'J9JDFGJDFGI49NRA');

// Checking blocks
console.log(bitcoin);
// Checking transactions
console.log(bitcoin.chain[2]);
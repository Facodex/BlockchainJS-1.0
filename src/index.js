const Block = require("./block");
const Blockchain = require("./blockchain");



async function run(){
    const blockchain = await new Blockchain;

    const block1 = new Block({ data: 'Block #1'});
    await blockchain.addBlock(block1);
    const block2 = new Block({ data: 'Block #2'});
    await blockchain.addBlock(block2);
    const block3 = new Block({ data: 'Block #3'});
    await blockchain.addBlock(block3);

    blockchain.print();
}

run();

// we use async and await because the creation of the block it isn't instantaneous 
// and where is created the blockchain also we use 'await' because is created the genesis block and the 'await' allow that don't be created the block1 with genesis block at the same time
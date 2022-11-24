const Block = require("./block");
const Blockchain = require("./blockchain");


// HERE THE BLOCKCHAIN IS RUN WITH DEFAULT DATA
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
// run();



async function makeTransaction(dataTransaction, number){
    let blocks = [{}];
    const blockchain = await new Blockchain;

    for (let i = 0; i < number; i++) {
        blocks[i] = new Block({ data: dataTransaction});
        await blockchain.addBlock(blocks[i]);
    }

    blockchain.print();
}
//HERE WE PASS THE DATA WE WANT TO SHARE AND THE NUMBER OF BLOCKS TO WHICH THIS DATA WILL BE SHARED
makeTransaction('bitcoin price $19800', 5);


// we use async and await because the creation of the block it isn't instantaneous 
// and where is created the blockchain also we use 'await' because is created the genesis block and the 'await' allow that don't be created the block1 with genesis block at the same time
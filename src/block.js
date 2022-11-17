// import the tool for generate the hash 
const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');

class Block {

    // Every block has this properties
    constructor(data){
        this.hash = null;
        this.height = 0; // position of the block in the chain
        this.body = Buffer.from(JSON.stringify(data).toString('hex')); //the body is a object of data
        this.time = 0; //the momemt the block is to the chain
        this.previousBlockHash = '';
    }   

    // the methods
    validate(){
        const self = this;
        return new Promise((resolve, reject) => {
            let currentHash = self.hash;
            self.hash = SHA256(JSON.stringify({ ...self, hash: null})).toString();
            
            if(currentHash !== self.hash){
                return resolve(false);
            }
            return resolve(true);
        });
    }

    getBlockData(){
        const self = this;
        return new Promise((resolve, reject) => {
            let encodedData = self.body; // here there are many hexadecimal codes
            let decodedData = hex2ascii(encodedData); //we passed a text code legible
            let dataObject = JSON.parse(decodedData); // And we convert that text a JSON object

            if( dataObject === 'Genesis Block'){
                reject( new Error( 'This is the Genesis Block' ));
            }
            resolve(dataObject);
        });
    }

    toString(){
        const {hash, height, body, time, previousBlockHash} = this;
        return  `Block -
            hash: ${hash}
            height: ${height}
            body: ${body}
            time: ${time}
            previousBlockHash: ${previousBlockHash}
            --------------------------------------------------`;
    }
}




module.exports = Block;
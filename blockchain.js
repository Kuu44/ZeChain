const { Block } = require("./block.js");

class BlockChain {
  constructor() {
    //contains all the blocks
    this.chain = [new Block(Date.now().toString())];
    this.difficulty = 1;
  }
  getLastBlock() { 
      return this.chain[this.chain.length - 1];
  }
  addBlock(block) {
      //set prevHash as the hash of the latest block
      block.prevHash = this.getLastBlock().hash;
      //reset the block's hash
      block.hash = block.getHash();
      block.mine(this.difficulty);
      this.chain.push(block);
  }
  isValid() {
      for (let i = 1; i < this.chain.length; i++){
          const currentBlock = this.chain[i];
          const prevBlock = this.chain[i - 1];

          //Check validation
          if(currentBlock.hash !== currentBlock.getHash() || prevBlock.hash !== currentBlock.prevHash){
              return false;
          }
      }

      return true;
  }
}

module.exports.BlockChain = BlockChain;
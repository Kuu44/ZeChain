const crypto = require('crypto'), 
      SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");

class Block {
    constructor(timestamp = "", data = []){
        this.timestamp = timestamp;
        //information that needs to be kept track of
        this.data = data;
        this.hash = this.getHash();
        this.prevHash =""; //previous block's hash
        this.nonce = 0; //A value that will produce a hash starting with a certain number of 0s
    }

    //The hash function
    getHash(){
        return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.data)+this.nonce);
    }

    //find nonce value
    mine(difficulty){
        while(this.hash.substring(0, difficulty)!==Array(difficulty+1).join("0")){
            //increase nonce to get a whole different hash
            this.nonce++;
            this.hash=this.getHash();
        }
    }
}

module.exports.Block = Block;
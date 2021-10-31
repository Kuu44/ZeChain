const { Block } = require("./block.js");
const { BlockChain } = require("./blockchain.js");

const ZeChain = new BlockChain();

ZeChain.addBlock(
  new Block(Date.now().toString(), { from: "Kuu", to: "NisPlant", threats: 69 })
);
ZeChain.addBlock(
  new Block(Date.now().toString(), { from: "PramPram", to: "Nisplant", fuckYous: 420 })
);
ZeChain.addBlock(
  new Block(Date.now().toString(), { from: "Nisplant", to: "Gopinis", fuckMes: 56 })
);

//Print out the updated chain
console.log(ZeChain.chain);
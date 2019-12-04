const fabcar = require('../../chaincode/newcc/lib/logic')
var mocha = require('mocha')
var describe = mocha.describe
const { ChaincodeMockStub, Transform } = require("@theledger/fabric-mock-stub")
const chaincode = new fabcar();
describe('Test MyChaincode', () => {
 
    it("Should init without issues", async () => {
        const mockStub = new ChaincodeMockStub("MyMockStub", chaincode);
 
        // Your test code
    });
});

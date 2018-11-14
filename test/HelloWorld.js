var HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', async () => {

    contract('getHello()', async () => {

        it('should return "Hello, World!"', async () => {

            let instance = await HelloWorld.deployed();
            let result = await instance.getHello.call();
            assert.equal(result, 'Hello, world!');

        });

    });

});
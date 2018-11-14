var Counter = artifacts.require('Counter');

contract('Counter', async () => {

    contract('getCount()', async () => {

        it('should return 0', async () => {

            let instance = await Counter.deployed();
            let result = await instance.getCount();
            assert.equal(result, 0);

        });

    });

    contract('incrementCount()', async () => {

        it('should increment count by 1', async () => {

            let instance = await Counter.deployed();
            await instance.incrementCount();
            let result = await instance.getCount();
            assert.equal(result, 1);

        });

    });

    contract('decrementCount()', async () => {

        it('should decrement count by 1', async () => {

            let instance = await Counter.deployed();
            await instance.decrementCount();
            let result = await instance.getCount();
            assert.equal(result, -1);
            
        });

    });

});
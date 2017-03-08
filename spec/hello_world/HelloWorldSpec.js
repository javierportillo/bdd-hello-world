const greeter = require('../../src/hello_world/Greeter');

describe('Greeter', function () {
    it('can say hello world', function () {
        expect(greeter.sayHello()).toBe('Hello World');
    });
});

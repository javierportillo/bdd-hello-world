const greeter = require('../../src/hello_world/Greeter');

describe('Greeter', function () {
    it('can say hello world', function () {
        expect(greeter.sayHello()).toBe('Hello World');
    });

    it('can greet when a name is given', function () {
        expect(greeter.sayHello('Javier')).toBe('Hello Javier');
    })
});

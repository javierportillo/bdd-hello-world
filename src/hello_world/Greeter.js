const Greeter = {
    sayHello: function (name) {
        return 'Hello ' + (name || 'World');
    }
};

module.exports = Greeter;

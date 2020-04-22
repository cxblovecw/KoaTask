const { user } = require('./init');

function register(u) {
    user.insertMany([
        u
    ])
}

function findUser(options) {
    return user.find(options);
}


findUser({ account: 17606059886 }).then(data => {
    console.log(data)
})

module.exports = {
    findUser: findUser,
    register: register
}
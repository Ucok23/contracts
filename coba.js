const user = {
    hello: 'we',
    sayWelcome() {
        console.log(this.hello)
    }
};
setTimeout(user.sayWelcome, 1000)
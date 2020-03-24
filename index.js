new Vue({
    el: '#app',
    data: {
        title: 'Hello World! from Richie',
        link: 'http://google.com ',
        counter: 0
    },
    methods: {
        sayHello: function() {
            this.title = 'Hello';
            return this.title;

        },

        increase: function() {
            this.counter++;
        }
    }
});
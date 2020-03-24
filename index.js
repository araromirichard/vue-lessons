new Vue({
    el: '#app',
    data: {
        title: 'Hello World! from Richie'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        }
    }
});
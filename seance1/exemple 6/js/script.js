let app = new Vue({
    el: '#app',
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
    },
    methods: {
        randomIndex: function() {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function() {
            this.items.splice(this.randomIndex(), 1)
        }
    }
})


let app1 = new Vue({
    el: '#app1',
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
    },
    methods: {

        add1: function() {
            //this.items.splice(this, 0, this.nextNum++)
            this.items.push(this.nextNum++)
        },
        remove: function() {
            //this.items.splice(this, 1)
            this.items.pop()
        }
    }
})
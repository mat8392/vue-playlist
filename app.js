Vue.component('greeting', {
    template: '<p>Hey. I am re-usable component. My Name is {{ componentName}}. <button v-on:click="changeComponentName">Change Name component</button></p>',
    data: function () {
        return {
            componentName: 'Yoshi'
        }
    },
    methods: {
        changeComponentName: function () {
            this.componentName = 'Mario';
        }
    }
});

var first = new Vue({
    el: '#vue-app',
    data: {
        name: 'Nazrin',
        job: 'Programmer',
        website: 'https://www.thenetninja.co.uk/,',
        websiteTag: '<a href="website">The Net Ninja</a>',
        age: 25,
        x: 0,
        y: 0,
        myName: '',
        myAge: '',
        cAge: 20,
        a: 0,
        b:0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            {name: 'Ryu' , age: 20},
            {name: 'Luigi' , age: 21},
            {name: 'Ken' , age: 22},
        ],
        health: 100,
        ended: false,
    },
    methods : {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        },
        add: function(inc) {
            // not this.data.age because vue already props the data.
            this.age += inc;
        },
        subtract: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
            console.log(event);
        },
        klik: function() {
            alert('You click me');
        },
        logName: function() {
            console.log('You enter your name!');
        },
        logAge: function() {
            console.log('You enter your age!');
        },
        punch: function() {
            this.health -= 10;
            if (this.health == 0) {
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {
            addToA:function() {
                console.log('AddtoA');
                return this.cAge + this.a;
            },
            addToB: function() {
                console.log('AddtoB');
                return this.cAge + this.b;
            },
            compClass: function () {
                console.log(this.available);
                a = {
                    available: this.available,
                    nearby: this.nearby,
                };
                return a;
            }
        }
});

var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'One'

    },
    methods:{
    },
    computed: {
        greet: function() {
            return 'Hello from one';
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Two'

    },
    methods:{
        changeTitle: function() {
            one.title = 'title change';
        }

    },
    computed: {
        greet: function() {
            return 'Hello from two';
        }
    }
});

two.title = "Change from outside";

var three = new Vue({
    el: '#vue-app-three',
});

var four = new Vue({
    el: '#vue-app-four',
});

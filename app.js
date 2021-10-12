const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      myNumber: 7,
      name: '',
    };
  },
  methods: {
    counterUp(num) {
      this.counter += num;
    },
    counterDown(num) {
      this.counter -= num;
    },
    updateName(event) {
      this.name = event.target.value;
    }
  }
});

app.mount('#events');

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    counterUp() {
      this.counter++;
    },
    counterDown() {
      this.counter--;
    }
  }
});

app.mount('#events');

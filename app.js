const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      myNumber: 7,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      //event.preventDefault();
      alert("Submitted!");
    },
    counterUp(num) {
      this.counter += num;
    },
    counterDown(num) {
      this.counter -= num;
    },
    updateName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");

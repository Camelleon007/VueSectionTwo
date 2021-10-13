const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      myNumber: 7,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    resetInput(){
      this.name = ''
    },
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
  },
});

app.mount("#events");

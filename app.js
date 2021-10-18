const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      myNumber: 7,
      name: "",
      confirmedName: "",
      lastName: "Kowalski",
      fullName: ""
    };
  },
  watch: {
    name(newValue, oldValue) {
      this.fullName = newValue + " " + this.lastName + " (Previous name: " + oldValue + ")" ;
      
    },
    counter(value) {
      if (value>49) {
        this.counter = 0; 
      }
    }
  },
  computed: {
    outputFullName() {
      console.log('Running again...');
      if (this.name === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    }
  },
  methods: {    
    resetInput() {
      this.name = "";
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

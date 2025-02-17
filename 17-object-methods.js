const person = {
    firstName: 'Parsa',
    lastName: "Soroush",
    age: 20,
    fullName: function() {
        return this.firstName + " " + this.lastName;
      }
}

console.log(person.fullName());
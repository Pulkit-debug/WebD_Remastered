// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/phonedb', {useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function() {
  console.log("conected to database!!");
});

// this schema is used for the validations of mongodb and it acts as a layer on top of mongodb
// for that we have to make a strict schema (ki hum usme kya dalne vale hai)
const kittySchema = new mongoose.Schema({
  name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  const greeting = this.name + " gives lots of greetings to you!!";
  console.log(greeting);
}


//model is the final compiled schema

const Kitten = mongoose.model('Kitten', kittySchema);



const pulkitKitty = new Kitten({ name: 'pulkitKitty' });
console.log(pulkitKitty.name);
pulkitKitty.speak();

pulkitKitty.save(function (err, kitty) {
  if (err) return console.error(err);
  pulkitKitty.speak();
});

// to find something with mongoose

Kitten.find({name: "pulkitKitty"}, function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
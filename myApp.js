require('dotenv').config();

const dotenv = require('dotenv');
dotenv.config({path: 'sample.env'});

const mongoose = require('mongoose');
const { Schema, model } = mongoose; // Destructuring for creating a schema and model

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Error connecting to the database');
  })

// Create a schema
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

let Person = model('Person', personSchema);

// Create and save a record of a Model
const createAndSavePerson = (done) => {
  let person = new Person({
    name: 'John',
    age: 25,
    favoriteFoods: ['Pizza', 'Burger']
  });

  person.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// Create many people with `Model.create()`
let arrayOfPeople = [
  {name: "Zack", age: 32, favoriteFoods: ["tacos"]},
  {name: "Lupita", age: 27, favoriteFoods: ["pasta"]},
  {name: "Bruno", age: 4, favoriteFoods: ["roast chicken"]},
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

// Use `Model.find()` to search your database
const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

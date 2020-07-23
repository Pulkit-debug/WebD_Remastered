// inserting data in mongo db

de.items.insertOne({name: "iphone", founder: "Steve", isGood: "true"});

db.items.insertMany([{name: "moto", founder: "motoFounder", isGood: "Maybe"}, {name: "gullu", founder: "fictional", isGood: "yeah"}]);

// to find all the items pressent

db.items.find();

// to find item with specifica paramter

db.items.find({item: "item"});

// to use greater than or equal to for an item

db.items.find({rating: {$gte: 3.5}})
// to use greater than for an item
db.items.find({rating: {$gt: 4}})

// to use less than for an item

db.items.find({rating: {$lt: 3}})

// using AND  operator 
db.items.find({name: "iphone"}, {isGood: "true"})

//using OR operator

db.items.find({ $or:[{name: "lallu"}, {isGood: "Maybe"}]})

// deleting item from the data

db.items.deleteOne({name: "gullu"})

// to update item from the data

db.items.updateOne({name: "moto"}, {$set: {name: "motorola"}})

// to update many

db.items.updateMany({name: "iphone"}, {$set: {founder: "jobs", isGood: "false"}})
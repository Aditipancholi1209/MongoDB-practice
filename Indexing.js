// Indexing : single field index, Compound Indexes, Text Indexes

db.collection.find({field:'value'}).explain()
// explain will explain all the working behind the query that we wrote

db.Employees.createIndex({"age":1}) //index will be created at age field & ascending order sorting is done when we gave 1
// age_1

// automatically on id , the indexes get created

// to drop index : name of index
 db.Employees.dropIndex('age_1')

//  the age index got deleted
 db.Employees.getIndexes()
[ { v: 2, key: { _id: 1 }, name: '_id_' } ]

//when not to use indexing in mongodb
// collection is small, multiple fields, queries will be complex


// Compound Indexes
db.Employees.createIndex({"age":1,"name":1})   //order matters : sort will happen first by age then by name

db.Employees.createIndex({name:1},{unique:true}) // will give unique values



// Partial Filter Indexing ; when wants to do indexing only a particular field
db.Employees.createIndex({age:1},{partialFilterExpression: {age:{$lte:20}}})

// the index is created then gets deleted in the given duration in expireSeconds 
db.Employees.createIndex({"expires":1},{expireAfterSeconds:3600})
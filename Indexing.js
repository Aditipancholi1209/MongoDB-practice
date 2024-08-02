// Indexing : single field index, Compound Indexes, Text Indexes
// Indexes : special DS that store small portion of collection's data in easy-to-transform manner



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
// expire works on date field & single field index




// Multi-key index - array field indexes
// mongoDB creates a specific index entry at each value in each array so it can quickly look up documents that match a specific value
db.Employees.createIndex({Hobbies:1})
db.Employees.getIndexes()
db.Employees.find({Hobbies:'Walk'}).explain()

// Text Index :-
// only 1 text index can be created, but we can add multiple fields
// 1)Single text index per collection
// 2) Tokenization & stemming
// 3) Relevance score

db.Employees.find({Bio:"I'm a singer, coder."})
db.Employees.createIndex({bio:"text",name:"text"})
// we can find out text in both of these field
db.Employees.find({$text: {$search: "singer"}})
db.Employees.createIndex({name:"text",bio:"text"},{weights:{name:1000,bio:1}})
db.Employees.createIndex({name:"text",bio:"text"},{background:true})
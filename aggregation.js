// db.collection.aggregate(pipeline,options)
// pipeline is an array of all the operations

db.Employees.aggregate([{$match : {age:23}}]) 

// find the male teachers only
db.Teachers.aggregate([{$match:{gender:"male"}}])

//group teachers by age :
// one of the operator in the pipeline
db.Teachers.find({age:{$gt:20}})

// $group:{_id:expression,field:expression,field2:expression}
db.Teachers.aggregate([{$group:{_id:"$age"}}])

db.Teachers.aggregate([
   {$group:{_id:"$age",names:{$push:"$name"}}}
])

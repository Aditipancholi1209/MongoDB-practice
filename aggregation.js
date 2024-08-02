// db.collection.aggregate(pipeline,options)
// pipeline is an array of all the operations

db.Employees.aggregate([{ $match: { age: 23 } }])

// find the male teachers only
db.Teachers.aggregate([{ $match: { gender: "male" } }])

//group teachers by age :
// one of the operator in the pipeline
db.Teachers.find({ age: { $gt: 20 } })

// $group:{_id:expression,field:expression,field2:expression}
// $age: field 
// "age":string

db.Teachers.aggregate([{ $group: { _id: "$age" } }])

db.Teachers.aggregate([
   { $group: { _id: "$age", names: { $push: "$name" } } }
])
// Root: whole current doc 
db.teacherData.aggregate([{ $group: { _id: "$age", Doc: { $push: "$$ROOT" } } }])
db.teacherData.aggregate([{ $group: { _id: "$gender" } }])
db.teacherData.aggregate([{ $match: { gender: "Male" } }, { $group: { _id: "$age" } }])

// male teachers count
db.teacherData.aggregate([{ $match: { gender: "Male" } }, { $group: { _id: "$age", count: { $sum: 1 } } }])

db.teacherData.aggregate([{ $match: { gender: "Male" } }, { $group: { _id: "$age", count: { $sum: 1 } } }]).sort({ _id: -1 })

// another way of sorting
db.teacherData.aggregate([{ $match: { gender: "Male" } }, { $group: { _id: "$age", count: { $sum: 1 } } }, { $sort: { _id: -1 } }])
// sorting by id


// taking out the maximum
db.teacherData.aggregate([{ $match: { gender: "Male" } }, { $group: { _id: "$age", count: { $sum: 1 } } }, { $sort: { _id: -1 } }, { $group: { _id: null, maxValue: { $max: "$_id" } } }])

// toDouble will *2
db.teacherData.aggregate([{ $group: { _id: "$age", sumofAgesInGroup: { $sum: { $toDouble: "$age" } } } }])

// experience wise group by
db.teacherData.aggregate([{ $group: { _id: "$age", experience: { $push: "$experience" } } }])

// experience wise group by & unwind the nested array
db.teacherData.aggregate([{ $unwind: "$experience" }, { $group: { _id: "$age", experience: { $push: "$experience" } } }])


db.teacherData.aggregate([{ $unwind: "$experience" }])

// find avg of all the age
db.teacherData.aggregate([{ $group: { _id: null, avgAge: { $avg: '$age' } } }])

// gives the count of all the experiences in total of everyone
db.teacherData.aggregate([{ $group: { _id: null, count: { $sum: { $size: "$experience" } } } }])


// {$size: <expression>}
// {$ifNull: [<expression>,<replacementExpression>]}

db.teacherData.aggregate([
   {
      $group:
      {
         _id: null,
         count: 
         {
            $sum: 
            {
               $size: "$experience"
            }
         }
      }
   }
])

db.teacherData.aggregate([
   {
      $group:
      {
         _id: null,
         count:
         {
            $sum:
            {
               $size:
               {
                  $ifNull: ["$experience", []]
               }
            }
         }
      }
   }
])


db.Employees.aggregate(
   [
      {
         $unwind:"$Hobbies"
      }
      ,
      {
         $group:
         {
            _id:null,
            hobbiesAll: 
            {
               $push:"$Hobbies"
            }
         }
      }
   ]
)

// [ { _id: null, hobbiesAll: [ 'Walk', 'Talk' ] } ]
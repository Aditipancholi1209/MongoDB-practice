// $and , $or , $nor , $not

db.Employees.find({ $or: [{ age: { $lt: 12 } }, { age: { $gt: 15 } }] })

db.Employees.find({ $nor: [{ age: { $lt: 12 } }, { age: { $gt: 15 } }] })
// does not satisfy both of the conditions

db.Employees.find({ $and: [{ age: { $lte: 24 } }, { hobbies: 'cooking' }] })
// age less than 24 & cooking both


db.Employees.find({ age: { $lt: 12 } }, { age: { $gt: 15 } })
// in this case the last condition will get run in case of JSON, it's the rule

db.Employees.find({$and:[{ age: { $lt: 12 } }, { age: { $gt: 15 } }]})
// satisfies both of the condition

db.Employees.find({$and:[{ age: {$not:{ $lt: 12 } }}, {$not:{ age: { $gt: 15 } }}]})
// not 

db.Employees.find({'idCards.hasAadhar':{$exists:true}})

db.Employees.find({'idCards.hasAadhar':{$exists:true, $type:'bool'}})

db.Employees.find({idCards:{$exists:true}})


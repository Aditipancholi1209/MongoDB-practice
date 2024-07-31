// inc 
db.Employees.updateMany({}, { $inc: { age: 2 } })


// max: it is used when we want to change to a value which is larger than the current value 
db.Employees.updateMany({}, { $max: { age: 2 } })


// min: it is used when we want to change to a value which is smaller than the current value
db.Employees.updateMany({}, { $min: { age: 2 } })


// mul ; it's used when we want to multiply the value with some no.
db.Employees.updateMany({}, { $mul: { age: 2 } })


// in case when change is to be done in only 1 field
db.Employees.updateMany({ name: "John Doe" }, { $max: { age: 20 } })


// $unset: to remove that field name
db.Employees.updateMany({ name: "John Doe" }, { $unset: { age: 20 } })


// $set : to set a field name
db.Employees.updateMany({ name: "John Doe" }, { $set: { age: 20 } })


// $rename : to rename the field name 
db.Employees.updateMany({ name: "John Doe" }, { $rename: { age: "EmpAge"} })
db.Employees.updateMany({}, { $rename: { age: "EmpAge"} })


// $upsert : if the field is present then set the value , if not then insert that document
db.Employees.updateMany({name:"Aditi"},{$set:{age:23}},{upsert:true})


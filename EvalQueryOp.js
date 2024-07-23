// $expr - comparison, arithematic operation
db.Employees.find({
    $expr:{$gt:["$field1","$field2"]}
})
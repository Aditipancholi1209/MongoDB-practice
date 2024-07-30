db.Employees.find()
db.Employees.find().sort({ age: 1 }) //ascending 
db.Employees.find().sort({ age: -1 }) //descending 

db.Employees.find().sort({ age: 1 }) //if age is same , then sort with name

db.Employees.find().sort({ age: 1, name: 1 }) //alphabetical order

db.Employees.find().sort({ age: 1, name: 1 }).limit(2) //limit to 2 sort order asc
db.Employees.find().sort({ age: 1, name: 1 }).skip(10)
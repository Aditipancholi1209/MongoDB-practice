db.Employees.find({})
db.Employees.find({age:23})
db.Employees.find({age:{$gte: 23}})  //equal & greater than 23
db.Employees.find({age:{$eq: 23}}) //equal to 23
db.Employees.find({age:{$ne: 23}})  //not equal
db.Employees.find({age:{$in: [23,24,15]}}) //bring all the values that are in the list
db.Employees.find({age:{$nin: [23,24,15]}})
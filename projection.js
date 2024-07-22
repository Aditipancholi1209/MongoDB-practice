db.Employees.find({},{name:1, _id:0})

// ans: [ { name: 'Aditi Pancholi' }, { name: 'Akshat' } ]
// 0; not included , 1:included
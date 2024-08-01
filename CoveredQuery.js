// all the fields written in the query has the same index , all fields are a part of it.

// covered query is very fast , it will not search in the document , it'll search for it directly in the b-tree data structure 

db.Employees.find({name:"Aditi"},{_id:0,name:1}).explain("executionStats")

// stage: 'PROJECTION_COVERED',
// transformBy: { _id: 0, name: 1 },
// $expr - comparison, arithematic operation
db.Employees.find({
    $expr: { $gt: ["$field1", "$field2"] }
})

db.Employees.find({
    $expr: {
        $gt: ["$price", { $avg: "$price" }]
    }
})

//JsonSchema - Schema Validation

// regex; regular expression
db.Employees.find({ name: { $regex: /^A/ } })

// text operator
// first you have to create a index : then only you can use text operator

db.Employees.createIndex({ bio: 'text' })
db.Employees.find({
    $text: {
        $search: 'cook'
    }
})

// mod : modulus
db.Employees.find({ age: { $mod: [3, 0] } })


//ARRAYS:
db.Employees.find({ 'experience.company': "Amazon" })
db.Employees.find({ 'experience.company': "Amazon" }).size()
db.Employees.find({ experience: { $size: 3 } })
// db.Employees.find({ $expr: { $gt: { $size: { experience: 3 } } } )
// $size - only Number, no expression


db.Employees.find({
    $and: [{ age: { $exists: true } }, { $expr: { $gte: ["$age", 3] } }]
})
db.Employees.find({ hobbies: { $all: ["cooking", "Anime"] } })
// $all should include everything

db.Employees.find({ hobbies: { $all: ["cooking", "Anime"] } })

// in operator to check whther this is present in the array  
db.Employees.find({ hobbies: { $all: ["cooking", "Anime"] } })
db.Employees.find("$and"[{ "products.name": 'apple' }, { "products.quantity": { $gt: 11 } }])
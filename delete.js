db.inventoy.deleteMany({})
// delete everything

db.inventory.deleteOne({status:"D"})
// it will delete the record with status D




//  limit will give the very first document & only 1 or whatever the limit provided
db.inventory.find().limit(1)


// skips on document , first document only - eg: pagination
db.inventory.find().skip(1)


// sort by quantity
db.inventory.find().sort({qty:1}) //ascending

db.inventory.find().sort({qty:-1}) //descending








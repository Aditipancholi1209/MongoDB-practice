db.products.find()
db.inventory.find({})
// fetch all documents

db.inventory.find({ qty: 200 })
// fetch all documents with one specific value 

db.inventory.find({ tags: { $in: ["red", "D"] } })

db.inventory.find({ status: "A", qty: { $lt: 30 } })   //AND

db.inventory.find({ $or: [{ status: "A", qty: { $lt: 30 } }] })  
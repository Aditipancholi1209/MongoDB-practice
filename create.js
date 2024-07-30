db.inventory.insertOne({ _id: 10, "item": "packing peanuts", "qty": 200 });

// insertOne
// insertMany

db.products.insertMany([
    { item: "card", qty: 15 },
    { item: "envelope", qty: 20 },
    { item: "stamps", qty: 30 }
]);



//  Ordered in Insert Query
db.books.insertMany([{ name: "A", price: 1 }, { name: "B", price: 2 }])
db.books.insertMany([{ _id: "A", name: "A", price: 1 }, { _id: "B", name: "B", price: 2 }])
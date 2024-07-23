// { w: <value>, j: <boolean>, wtimeout: <number> }

// w: acknowledgment , j: journal , wtimeout: timeout seconds to finish the process

db.books.insertOne({name:'A',price:1})

db.books.insertOne({name:'A',price:1},{writeConcern:{w:0,j:false}}) //this is faster because it isn't waiting for acknowledgment
// by default j is false only - journal is not created
// j ; true (comparitively slow)
db.books.insertOne({name:'A',price:1},{writeConcern:{w:0,j:false,wtimeout:3}})
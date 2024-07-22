db.inventory.updateOne(
    {item:"canvas"},
    {
        $set: {"size.uom":'m',qty:200}
    }
)

// nested documents - 100 of levels is possible, 16 mb is size limit of each document
db.Employees.updateOne({name:"Akshat"},{$set:{idCards:{hasAadhar:true,hasPanCard:true}}})

// $currentDate: 

db.inventory.updateMany(
    { qty: { $lt: 300 } },
    {
      $set: { qty: 100 }
    }
  )


  // nesting in updateMany
db.Employees.updateMany({},{$set:{hobbies:['Anime','cooking']}})


db.Employees.find({},{hobbies:'K-Dramas'})


db.Employees.find({'idCards.hasPanCard':false})   //to find inside nesting
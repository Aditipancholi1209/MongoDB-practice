// inserting field of experience in every document
db.Employees.updateMany(
    {},
    {
        $set:
        {
            experience:
                [
                    { company: "Swiggy", year: 2 },
                    { company: "Airtel", year: 4 }
                ]
        }
    }
)

// $elemMatch : matches documents that contain an array field with at least one element that matches all the specified query criteria.
db.Employees.updateMany(
    {
        experience:
        {
            $elemMatch:
            {
                year:
                {
                    $lte: 1
                }
            }
        }
    },
    {
        $set:
        {
            "experience.$.neglect": true    //finds the first record,updates it only
        }
    }

)

db.Employees.find({ experience: { $elemMatch: { year: { $lte: 1 } } } })

db.Employees.updateMany(
    {
        experience:
        {
            $elemMatch:
            {
                year:
                {
                    $lte: 1
                }
            }
        }
    },
    {
        $set:
        {
            "experience.$[].neglect": 1   //selects the whole doc
        }
    }

)

db.Employees.updateMany(
    {
        experience:
        {
            $elemMatch:
            {
                year:
                {
                    $lte: 1
                }
            }
        }
    },
    {
        $set:
        {
            "experience.$[].neglect": 1   // include all 
        }
    },
    {
        arrayFilters: [{ "e.year": {  $lte: 1 }  }]
    }

)

db.Employees.updateMany(
    {
        experience:
        {
            $elemMatch:
            {
                year:
                {
                    $lte: 1
                }
            }
        }
    },
    {
        $set:
        {
            "experience.$[e].neglect": 1   // match all
        }
    },
    {
        arrayFilters: [{ "e.year": {  $lte: 1 }  }]
    }

)

// $push : to add particular field in a doc
db.Employees.updateOne({name:'Aditi'},{$push:{experience:{company:'Meta',year:5}}})

// if its still exist it will not get inserted
db.Employees.updateOne({name:'Aditi'},{$addToSet:{experience:{company:'Meta',year:5}}})

// remove the last edit entry
db.Employees.updateOne({name:'Aditi'},{$addToSet:{experience:1}})

// remove the first edit entry
db.Employees.updateOne({name:'Aditi'},{$addToSet:{experience:1}})

// pull: remove
db.Employees.updateOne({name:'Aditi'},{$pull:{experience:{company:'Meta',year:5}}})

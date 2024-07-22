db.createCollection("nonFiction")

db.createCollection("nonFiction",{
validator:{
    $jsonSchema:{
        required:['name','price'],
        properties:{
            name:{
                bsonType: 'string',
                description:"must be string"
            },
            price:{
                bsonType:'number',
                description:'must be number and required'
            }
        }
    }

},
validationAction : 'error'   
})


db.createCollection('fiction',{
    validator:{
        $jsonSchema:{
            required:['name','price','pages','author'],
            properties:{
                name:{
                    bsonType:'string',
                    description:'must be string'
                },
                price:{
                    bsonType:'number',
                    description:'must be a number'
                },
                pages:{
                    bsonType: 'number',
                    description:'must be a number'
                }
                ,
                author:{
                    bsonType:'array',
                    required:['name','email'],
                    description:'must be an array',
                    properties:{
                        name:{
                            bsonType:'string',
                            description:'must be string'
                        },
                        email:{
                            bsonType:'string',
                            description:'must be string'
                        }
                    }
                }
            }
        }
    },
    validationAction:'error'
})
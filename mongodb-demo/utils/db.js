const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const url='mongodb+srv://Venkatesh:smsv1999@cluster0.0yudxar.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url)

    // if (error){
    //     console.log(error)
    //     return;
    // }
const db = client.db('test1');
// db.collection('users').insertOne({
//     name:"Venkatesh",
//     age:21
// })
// .then(res =>console.log(res))
// .catch(e => console.log(e.message))


// db.collection('users').insertMany([{
//     name:"Vinay",
//     age:5
// }
// ])
// .then(res =>console.log(res))
// .catch(e => console.log(e.message))

// db.collection('users').findOne({age:35})
// .then(res=>console.log(res))
// .catch(e=>console.log(e))

// db.collection('users').find().toArray()
// .then(res=>console.log(res))
// .catch(e=>console.log(e))

// db.collection('users').updateOne({age:21},{
//     $set:{
//         age:59
//     }
// })
// .then(res=>console.log(res))
// .catch(e=>console.log(e))
// db.collection('users').updateMany({},{
//     $inc:{
//         age:100
//     }
// })
// .then(res=>console.log(res))
// .catch(e=>console.log(e))

db.collection('users').deleteMany({age:218}
)
.then(res=>console.log(res))
.catch(e=>console.log(e))

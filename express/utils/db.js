const mongodb=require('mongodb')
const mongoclient=mongodb.MongoClient

const url="mongodb+srv://Venkatesh:smsv1999@cluster0.0yudxar.mongodb.net/?retryWrites=true&w=majority"
mongoclient.connect(url,(error,client)=>{
    if (error){
console.log(error)
return;
    }
const db=client.db("test");
db.collection('users').insertOne(
    {
        'name':"Venkatesh",
        'age':21
    }
).then(res=>console.log(res.ops))
.catch(error=>(console.log(error)))
console.log(client)
})
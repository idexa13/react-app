

const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://andrzej:Andrewcs@cluster0.bnt60.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const start = async () => {

    await client.connect()
    const databasesList = await client.db('sample_airbnb').collection('listingsAndReviews').countDocuments()
    console.log(databasesList)
}




//  google storage

const {Storage} =  require('@google-cloud/storage')


const storage = new Storage();

const bucket = storage.bucket('kraftdrew_marketplace_assets')
const image_link = bucket.file('bomber.png').publicUrl()

console.log(image_link)




// import { MongoClient } from 'mongodb';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     // Connect to MongoDB
//     const uri = 'mongodb+srv://yasas:database@itpm.aw6qrpg.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI
//     const client = new MongoClient(uri);
//     await client.connect();

//     // Select the database and collection
//     const db = client.db('test'); // Replace 'myDatabase' with your database name
//     const collection = db.collection('services'); // Replace 'contacts' with your collection name

//     // Insert the form data into MongoDB
//     await collection.insertOne({
//       name,
//       email,
//       message,
//     });

//     // Disconnect from MongoDB
//     await client.close();

//     res.status(200).json({ message: 'Form data saved successfully.' });
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
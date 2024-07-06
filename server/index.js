const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

require("dotenv").config();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is alive");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9ufgpon.mongodb.net/TeachersAttendance`;

const dbName = "TeachersAttendance";

async function connectDB() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to Database");

    const db = client.db(dbName);

    const collection = db.collection("myCollection");
    const document = await collection.findOne({});
    console.log(document);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
connectDB().catch(console.error);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

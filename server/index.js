const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9ufgpon.mongodb.net/TeachersAttendance?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnect = async () => {
  try {
    await client.connect();
    console.log("Connected to Database");

    // database
    const db = client.db("Teachers-attendance");

    // collections
    const usersCollection = db.collection("users");

    return { usersCollection };
  } catch (error) {
    console.error("Database connection failed", error);
    throw error;
  }
};

dbConnect()
  .then(({ usersCollection }) => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    app.get("/", (req, res) => {
      res.send("Server is alive");
    });

    // Registered users collection
    app.post("/register", async (req, res) => {
      const { name, email, password, designation, image } = req.body;

      if (!name || !email || !password || !designation || !image) {
        return res.status(400).json({ message: "All fields are required" });
      }

      try {
        const newUser = { name, email, password, designation, image };
        const result = await usersCollection.insertOne(newUser);
        res.status(201).json({
          message: "User registered successfully",
          userId: result.insertedId,
        });
      } catch (e) {
        console.error(e);
        res
          .status(500)
          .json({ message: "An error occurred while registering the user" });
      }
    });
  })
  .catch((error) => {
    console.error(
      "Failed to start server due to database connection error",
      error
    );
  });

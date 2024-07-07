const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to handle form data
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9ufgpon.mongodb.net/TeachersAttendance?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
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

    // Register route
    app.post("/register", async (req, res) => {
      const { name, email, password, designation } = req.body;

      if (!name || !email || !password || !designation) {
        return res.status(400).json({ message: "All fields are required" });
      }

      try {
        const newUser = { name, email, password, designation };
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

    // Login route
    app.post("/login", async (req, res) => {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      try {
        const user = await usersCollection.findOne({ email });

        if (!user) {
          return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res.status(400).json({ message: "Invalid credentials" });
        }

        // If successful, you can generate a JWT token (optional)
        // For now, just send a success message
        res.status(200).json({ message: "Login successful" });
      } catch (e) {
        console.error(e);
        res
          .status(500)
          .json({ message: "An error occurred while logging in the user" });
      }
    });
  })
  .catch((error) => {
    console.error(
      "Failed to start server due to database connection error",
      error
    );
  });

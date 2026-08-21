const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Root route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// API test route
app.get("/api/hello", (req, res) => {
    res.json({
        message: "Backend is working!"
    });
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
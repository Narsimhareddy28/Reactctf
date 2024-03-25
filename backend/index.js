const express = require('express');
const mongoose = require('mongoose');
const Achievement = require('./achievementSchema.js'); // Import your schema file
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());


// MongoDB connection
mongoose.connect('mongodb+srv://ksainarsimhareddy03:Saireddy28@cluster0.eyvi81t.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


    // Create a route to fetch achievements from data
    app.get('/api/achievements', async (req, res) => {
        try {
            // Fetch achievements from data using the achievementSchema model
            const achievements = await Achievement.find();
            res.json(achievements);
        } catch (error) {
            // Handle any errors
            console.error('Error fetching achievements:', error);
            res.status(500).json({ error: 'Failed to fetch achievements' });
        }
    });

// Rest of your Express.js code goes here

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
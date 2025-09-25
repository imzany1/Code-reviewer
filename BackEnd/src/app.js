const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://code-reviewer-1-8afe.onrender.com");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


app.use(cors({
  origin: 'https://code-reviewer-1-8afe.onrender.com', // your actual frontend URL
    methods: ["GET", "POST"],
  credentials: true
})
);


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app;
import express from 'express';
import connectDB from './config/db.js';

const app = express();

// Connect Database
connectDB();

// Define a root route / endpoint
app.get('/', (req, res) => {
  res.send('API Running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
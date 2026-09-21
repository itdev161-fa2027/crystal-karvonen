import express from 'express';
import connectDB from './config/db.js';
import { check, validationResult } from 'express-validator';

// Initialize express application
const app = express();

// Connect to the database
connectDB();

// Configure Middleware
app.use(express.json());

// API endpoints
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

/**
 * @route POST api/users
 * @desc Register user
 */
app.post('/api/users', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], 
  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }else{
      return res.send(req.body);
    }
    
});

// Connection listener
app.listen(3000, () => console.log(`Express server running on port 3000`));
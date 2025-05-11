const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

// Debug: Check if .env file exists
const envPath = path.join(__dirname, '.env');
console.log('Checking for .env file at:', envPath);
if (fs.existsSync(envPath)) {
  console.log('.env file exists');
  // Read and log the contents of .env file
  const envContents = fs.readFileSync(envPath, 'utf8');
  console.log('.env file contents:', envContents);
} else {
  console.log('.env file does not exist');
}

// Load environment variables from .env file
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('Error loading .env file:', result.error);
  process.exit(1);
}

const app = express();

// Debug: Log environment variables
console.log('Current directory:', __dirname);
console.log('MongoDB URI:', process.env.MONGODB_URI);
console.log('.env file path:', envPath);

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5001', 'https://docondwaar-client.onrender.com'],
  credentials: true
}));

// Middleware
app.use(express.json());

// Connect to MongoDB with error handling
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }
    
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected Successfully');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1);
  }
};

connectDB();
app.get('/', (req, res) => {
  res.send('Welcome to DocOnDwaar backend!');
});


// Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
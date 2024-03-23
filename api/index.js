
// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const cors = require('cors');

// // MongoDB connection
// mongoose.connect('mongodb+srv://hallmarkmanagement54:hallmarkmanagement54@hallmark.9xddgka.mongodb.net/hallmarkmanagement54');

// // Allow requests from multiple routes on the frontend domain, including login and register routes
// const allowedOrigins = [
//   "https://hallmarkmoviesandmystries.vercel.app" // Remove the space before http
//   // Add other origins as needed
// ];

// app.use(cors({
//   origin: allowedOrigins,
//   credentials: true, // Allow cookies and credentials
// }));

// // Define routes for user and admin operations
// app.use('/api/users', require('./routes/usersRoutes')); // This includes the existing routes
// app.use('/api/deposits', require('./routes/depositRoutes')); // Include the new route for deposits

// // Route for greeting message
// app.get('/', (req, res) => {
//   res.send('Welcome to our server!'); // Send a greeting message
// });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

// MongoDB connection
mongoose.connect('mongodb+srv://hallmarkmanagement54:hallmarkmanagement54@hallmark.9xddgka.mongodb.net/hallmarkmanagement54');

// CORS configuration
app.use(cors());

// Define routes for user and admin operations
app.use('/api/users', require('./routes/usersRoutes')); // This includes the existing routes
app.use('/api/deposits', require('./routes/depositRoutes')); // Include the new route for deposits

// Route for greeting message
app.get('/', (req, res) => {
  res.send('Welcome to our server!'); // Send a greeting message
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


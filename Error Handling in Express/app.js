const express = require('express');
const app = express();
const port = 5000; // Your desired port

app.use((err, req, res, next) => {
    // Your error handling code here
    console.error(err); // Log the error
  
    // Send an error response to the client
    res.status(500).json({ error: 'Something went wrong' });
  });

  app.get('/example', (req, res, next) => {
    try {
      // Some code that might throw an error
      const result = someFunction();
      res.json({ result });
    } catch (error) {
      next(error); // Pass the error to the error handling middleware
    }
  });

  app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });
  
  // Global Error Handler
  app.use((err, req, res, next) => {
    // Your error handling code here
    console.error(err); // Log the error
  
    res.status(err.status || 500).json({ error: err.message });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
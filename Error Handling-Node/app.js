const http = require('http');
const express = require('express');
const app = express();

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  

  app.get('/example', (req, res, next) => {
    try {
      // Some code that might throw an error
      const result = someFunction();
      res.send(result);
    } catch (error) {
      next(error); // Pass the error to the error handling middleware
    }
  });
  

  const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

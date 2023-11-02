
// Import the 'fs' module for file system operations
const fs = require('fs');

// Create a buffer with a specified size
const buffer = Buffer.alloc(10);

// Fill the buffer with data
buffer.write('Hello');

// Read and display the buffer contents
console.log('Buffer Contents:', buffer.toString());

// Read binary data from a file and store it in a buffer
fs.readFile('example.bin', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const fileBuffer = Buffer.from(data);

  // Display the buffer contents
  console.log('File Buffer Contents:', fileBuffer.toString('hex'));
});

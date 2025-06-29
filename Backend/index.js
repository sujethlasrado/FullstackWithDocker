const express = require('express');
const { Pool } = require('pg');

const app = express();

// Define your database connection parameters
const dbConfig = {
  user: 'postgres',
  host: 'database', // <--- use the service name!
  database: 'postgres',
  password: 'password',
  port: 5432,
};

// Create a pool of connections to the database
const pool = new Pool(dbConfig);

// Create the table if it doesn't exist first
pool.query(`
  CREATE TABLE IF NOT EXISTS mytable (
    id SERIAL PRIMARY KEY,
    name TEXT
  );
`, (err, res) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table is successfully created or already exists.');

    // Now test the connection and select from the table
    pool.query('SELECT * FROM mytable', (err, res) => {
      if (err) {
        console.error('Error connecting to database:', err);
      } else {
        console.log('Connected to database!');
      }
    });
  }
});

// Define a route to test the connection
app.get('/test', (req, res) => {
  pool.query('SELECT * FROM mytable', (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Error fetching data' });
    } else {
      res.send(result.rows);
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
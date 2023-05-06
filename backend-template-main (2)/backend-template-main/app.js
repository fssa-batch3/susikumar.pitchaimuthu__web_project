const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

// Use Express.JS to create an app
const app = express();

// Assign default port
const port = process.env.PORT || 3000;

// Cross Origin error prevention and security
// Check: Port number same as your frontend port number?
const allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:5500"];
const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
  methods: "GET, POST, DELETE",
};
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

// Start listening
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

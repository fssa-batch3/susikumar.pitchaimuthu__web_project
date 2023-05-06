connection = require("../connect");

// User Signup controller
const sign = (req, res) => {
  // get user data from request body
  const { first_name, last_name, user_name, email, password } = req.body;

  // insert user data into database
  connection.query(
    "INSERT INTO user (first_name, last_name, user_name, email, password) VALUES (?, ?, ?, ?, ?)",
    [first_name, last_name, user_name, email, password],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Error inserting user data" });
      } else {
        res.status(200).json({ message: "User data inserted successfully" });
      }
    }
  );
};

module.exports = {
  user,
};

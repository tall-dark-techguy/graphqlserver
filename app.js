const express = require("express");
const cors = require("cors");
const connectDb = require("./config/connectDb");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/config/index");
const jwt = require("jsonwebtoken");
const Cryptr = require("cryptr");

const app = express();

const cryptr = new Cryptr("ee8fa7ba45ca885a");

// allow cross-origin
app.use(cors());

app.use(express.json());

connectDb();

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // authentication against DB here...
    const payload = { user: email }; // pass user object from DB to payload

    const token = jwt.sign(payload, "89hd983hf29fhf9h29fhfh2", {
      expiresIn: "12h",
    });

    res.json({
      data: token,
      message: "logged in",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

app.get("/api/login/:token", async (req, res) => {
  try {
    if (!req.params.token) {
      return res.json({
        status: "fail",
        message: "no valid token",
      });
    }

    const isValidToken = jwt.verify(token, "89hd983hf29fhf9h29fhfh2");

    if (!isValidToken) {
      return res.json({
        status: "fail",
        message: "token validation failed",
      });
    }

    // fetch user from DB using uid
    const user = {
      email: "desse@pluvastore.com",
      firstname: "Desmond",
      lastname: "Charles",
      username: "iamdesse",
    };

    res.json({
      data: user,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const port = process.env.NODE_ENV || 800;
app.listen(port, () => {
  console.log(`Running server on port:${port}`);
});

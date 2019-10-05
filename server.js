'use strict'
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const { PORT } = require('./config');

const schema = buildSchema(`
  type Query {
    getTimes: String
  }
`);

var root = {
  getTimes: () => {
    return "Times will return here...";
  }
};

var times = [
  {
    "id": "0000001",
    "time": 480,
    "gps": 2.1,
    "gallons": 3.80
  },
  {
    "id": "0000002",
    "time": 1000,
    "gps": 2.1,
    "gallons": 7.94
  }
]

app.use(express.static('public'));

app.use('/api/times', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: false,
}));

app.get('/api/test', function(req, res) {
  res.send(times);
})

module.exports = { app };

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})
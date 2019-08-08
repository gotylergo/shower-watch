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
  getTimes:  () => {
    return "Times will return here...";
  }
};

app.use(express.static('public'));

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: false,
}));

module.exports = { app };

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})
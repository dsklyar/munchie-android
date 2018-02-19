const graphql = require('graphql');
const {GraphQLSchema} = graphql;

const RootQueryType = require('./types/root.query');
const mutation = require('./mutation');

module.exports = new GraphQLSchema({
  query : RootQueryType,
  mutation
});
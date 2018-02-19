const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat
} = graphql;

const Item = require('../models/item.model');

const ItemQueryType = require('./types/item.query');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addItem: {
      type: ItemQueryType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        calories: { type: new GraphQLNonNull(GraphQLFloat) },
        price: { type: new GraphQLNonNull(GraphQLFloat) }
      },
      resolve(parentValue, { name, calories, price }) {
        return (new Item({
          name,
          calories,
          price
        })).save()
      }
    }
  }
});

module.exports = mutation;
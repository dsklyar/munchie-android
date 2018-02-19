const graphql = require('graphql');
const { GraphQLObjectType,
        GraphQLID,
        GraphQLString,
        GraphQLFloat
} = graphql;
const Item = require('../../models/item.model');

const ItemQueryType = new GraphQLObjectType({
  name: 'ItemQueryType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    calories: { type: GraphQLFloat },
    price: { type: GraphQLFloat }
  })
});

module.exports = ItemQueryType;
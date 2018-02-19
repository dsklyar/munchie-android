const graphql = require('graphql');
const { 
        GraphQLObjectType,
        GraphQLNonNull,
        GraphQLID,
        GraphQLList
      } = graphql;


const Item = require('../../models/item.model');

const ItemQueryType = require('./item.query');

const RootQueryType = new GraphQLObjectType({
  name : 'RootQueryType',
  fields : ()=>({
    items : {
      type : new GraphQLList(ItemQueryType),
      resolve(){
        return Item.find({});
      }
    },
    // apparat : {
    //   type : ApparatQueryType,
    //   args : { id: { type: new GraphQLNonNull(GraphQLID) } },
    //   resolve(parentValue, {id}) {
    //     return Apparat.findById(id);
    //   }
    // }
  })
});

module.exports = RootQueryType;
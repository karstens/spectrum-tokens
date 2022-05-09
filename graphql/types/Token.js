import {
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from "graphql";

export default new GraphQLInterfaceType({
  name: "Token",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    value: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

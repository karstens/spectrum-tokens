import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} from "graphql";

import ColorAliasValue from "./ColorAliasValue.js";

export default new GraphQLObjectType({
  name: "ColorAlias",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(obj) {
        return obj.id;
      },
    },
    type: {
      type: GraphQLString,
      resolve: () => "ColorToken",
    },
    value: {
      type: new GraphQLNonNull(ColorAliasValue),
    },
  },
});

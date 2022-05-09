import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLFloat,
} from "graphql";

import TokenInterface from "./Token.js";

export default new GraphQLObjectType({
  name: "DimensionToken",
  interfaces: [TokenInterface],
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
    value: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(obj) {
        return `${obj.quantity}${obj.units}`;
      },
    },
    quantity: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    units: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

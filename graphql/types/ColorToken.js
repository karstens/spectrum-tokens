import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} from "graphql";

import TokenInterface from "./Token.js";

export default new GraphQLObjectType({
  name: "ColorToken",
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
        return obj.a || obj.a < 1
          ? `rgba(${obj.r}, ${obj.g}, ${obj.b}, ${obj.a})`
          : `rgb(${obj.r}, ${obj.g}, ${obj.b})`;
      },
    },
    r: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    g: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    b: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    a: {
      type: GraphQLInt,
    },
  },
});

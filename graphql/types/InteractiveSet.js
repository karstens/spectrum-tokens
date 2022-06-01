import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from "graphql";

import db from "./../../db.js";
import StateToken from "./StateToken.js";

export default new GraphQLObjectType({
  name: "InteractiveSet",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(obj) {
        return obj.id;
      },
    },
    description: {
      type: GraphQLString,
    },
    states: { type: new GraphQLList(StateToken) },
  }),
});

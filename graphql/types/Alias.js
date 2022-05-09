import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from "graphql";

import AliasValue from "./AliasValue.js";

import db from "./../../db.js";

export default new GraphQLObjectType({
  name: "Alias",
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
    token: {
      type: new GraphQLNonNull(AliasValue),
      resolve(obj) {
        console.log(obj);
        return true;
        // return db.data.tokens.find((token) => token.id === obj.token_name);
      },
    },
  }),
});

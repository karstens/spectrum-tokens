import { GraphQLString, GraphQLNonNull, GraphQLList } from "graphql";

import TokenInterface from "../types/Token.js";

import db from "../../db.js";

const token = {
  type: TokenInterface,
  args: {
    name: {
      name: "name",
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, params) {
    return db.data.tokens.find((token) => token.id === params.id);
  },
};

const tokens = {
  type: new GraphQLList(TokenInterface),
  args: {},
  resolve(root, params) {
    return db.data.tokens;
  }
};

export default { token, tokens };

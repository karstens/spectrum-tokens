import { GraphQLString, GraphQLNonNull, GraphQLList, GraphQLID } from "graphql";

import ColorToken from "../types/ColorToken.js";
import db from "./../../db.js";

export default {
  ColorToken: {
    type: ColorToken,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve(root, params) {
      db.read();
      return db.data.ColorTokens.find(
        (ColorToken) => ColorToken.id === params.id
      );
    },
  },
};

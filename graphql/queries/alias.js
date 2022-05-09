import { GraphQLString, GraphQLNonNull, GraphQLList } from "graphql";

import AliasType from "../types/Alias.js";

import db from "../../db.js";

const alias = {
  type: AliasType,
  args: {
    name: {
      name: "name",
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, params) {
    return db.data.aliases.find((alias) => alias.id === params.id);
  },
};

const aliases = {
  type: new GraphQLList(AliasType),
  args: {},
  resolve(root, params) {
    return db.data.aliases;
  },
};

export default { alias, aliases };

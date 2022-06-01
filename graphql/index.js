import { GraphQLObjectType, GraphQLSchema } from "graphql";

import types from "./types/index.js";
import queries from "./queries/index.js";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: queries,
  }),
  types,
});

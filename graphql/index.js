import { GraphQLObjectType, GraphQLSchema } from "graphql";
import ColorToken from "./types/ColorToken.js";
import DimensionToken from "./types/DimensionToken.js";
import AliasValue from "./types/AliasValue.js";

import queries from "./queries/index.js";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: queries,
  }),
  types: [ColorToken, DimensionToken, AliasValue],
});

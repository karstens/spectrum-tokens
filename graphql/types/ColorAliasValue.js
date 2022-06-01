import { GraphQLUnionType } from "graphql";

import ColorAlias from "./ColorAlias.js";
import ColorToken from "./ColorToken.js";

export default new GraphQLUnionType({
  name: "ColorAliasValue",
  types: () => [ColorAlias, ColorToken],
});

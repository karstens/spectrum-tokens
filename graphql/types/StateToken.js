import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLEnumType,
  GraphQLList,
} from "graphql";

import db from "./../../db.js";
import ColorAliasValue from "./ColorAliasValue.js";
import ColorListValue from "./ColorListValue.js";

export const StateType = new GraphQLEnumType({
  name: "StateType",
  values: {
    DEFAULT: { description: "TODO: add default description" },
    HOVER: { description: "TODO: add hover description" },
    DOWN: { description: "TODO: add down description" },
    KEYFOCUS: { description: "TODO: add key focus description" },
  },
});

export default new GraphQLObjectType({
  name: "StateToken",
  fields: {
    state: {
      type: new GraphQLNonNull(StateType),
    },
    value: {
      type: ColorAliasValue,
    },
    colorList: {
      type: new GraphQLList(ColorListValue),
    },
  },
});

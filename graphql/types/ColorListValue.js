import {
  GraphQLUnionType,
  GraphQLEnumType,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
} from "graphql";

import ColorValue from "./ColorValue.js";
import ColorAliasValue from "./ColorAliasValue.js";

export const ColorThemeType = new GraphQLEnumType({
  name: "ColorThemeType",
  values: {
    LIGHT: { description: "TODO: add light description" },
    DARK: { description: "TODO: add dark description" },
    DARKEST: { description: "TODO: add darkest description" },
    WIREFRAME: { description: "TODO: add wireframe description" },
  },
});

const ColorListToken = new GraphQLObjectType({
  name: "ColorListToken",
  fields: {
    value: {
      type: new GraphQLNonNull(ColorValue),
    },
    themes: {
      type: new GraphQLList(ColorThemeType),
    },
  },
});

const ColorListAlias = new GraphQLObjectType({
  name: "ColorListAlias",
  fields: () => ({
    value: {
      type: new GraphQLNonNull(ColorAliasValue),
    },
    themes: {
      type: new GraphQLList(ColorThemeType),
    },
  }),
});

const ColorListValue = new GraphQLUnionType({
  name: "ColorListValue",
  types: () => [ColorListToken, ColorListAlias],
});

export default ColorListValue;

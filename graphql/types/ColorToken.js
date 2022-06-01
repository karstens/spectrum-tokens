import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLEnumType,
} from "graphql";

import ColorValue from "./ColorValue.js";
import ColorListValue from "./ColorListValue.js";

export default new GraphQLObjectType({
  name: "ColorToken",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(obj) {
        return obj.id;
      },
    },
    colorList: {
      type: new GraphQLList(ColorListValue),
    },
  },
});

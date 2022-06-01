import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  name: "ColorValue",
  fields: {
    value: {
      type: new GraphQLNonNull(GraphQLString),
      resolve(obj) {
        return obj.a || obj.a < 1
          ? `rgba(${obj.r}, ${obj.g}, ${obj.b}, ${obj.a})`
          : `rgb(${obj.r}, ${obj.g}, ${obj.b})`;
      },
    },
    r: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    g: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    b: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    a: {
      type: GraphQLInt,
    },
  },
});

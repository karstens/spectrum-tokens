import { GraphQLString, GraphQLNonNull, GraphQLList, GraphQLID } from "graphql";

import InteractiveSet from "../types/InteractiveSet.js";
import db from "./../../db.js";

export default {
  InteractiveSet: {
    type: InteractiveSet,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve(root, params) {
      db.read();
      const result = db.data.InteractiveSets.find(
        (InteractiveSet) => InteractiveSet.id === params.id
      );

      result.states.forEach((state, stateIndex) => {
        state.colorList.forEach((colorListItem, colorListIndex) => {
          colorListItem.value = db.data.ColorTokens.find((ColorToken) => {
            return ColorToken.id === colorListItem.value.ref;
          });
        });
      });
      return result;
    },
  },
};

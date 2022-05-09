import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
// import schema from "./graphql/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { readFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const schema = buildSchema(readFileSync("./schema.graphql", "utf8"));

const root = {
  interactiveSet: (id) => {
    return {
      __typename: "InteractiveSet",
      id: "neutral-background-color",
      name: "Neutral Background Color",
      description: "Something about what this is and how it is used.",
      states: {
        __typename: "StatesSet",
        default: {
          __typename: "ColorOptionList",
          tokens: [
            {
              token: {
                __typename: "ColorToken",
                id: "gray-800",
                name: "gray-800",
                value: [
                  {
                    value: "#222222",
                    tags: ["Light"],
                  },
                  {
                    value: "#ebebeb",
                    tags: ["Dark"],
                  },
                  {
                    value: "#ebebeb",
                    tags: ["Darkest"],
                  },
                  {
                    value: "#496EC2",
                    tags: ["Wireframe"],
                  },
                ],
              },
              tags: ["Light", "Wireframe"],
            },
            {
              token: {
                id: "gray-400",
                name: "gray-400",
                values: [
                  {
                    value: "#B1B1B1",
                    tags: ["Light"],
                  },
                  {
                    value: "#707070",
                    tags: ["Dark"],
                  },
                  {
                    value: "#6a6a6a",
                    tags: ["Darkest"],
                  },
                  {
                    value: "#B7C8EB",
                    tags: ["Wireframe"],
                  },
                ],
              },
              tags: ["Dark", "Darkest"],
            },
          ],
        },
      },
    };
  },
};

const app = express();

app.use(express.static(__dirname));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

var server = app.listen(4000, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${
      server.address().port
    }/graphql`
  );
});

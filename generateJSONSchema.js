import { buildSchema, graphqlSync, getIntrospectionQuery } from "graphql";
import { fromIntrospectionQuery } from "graphql-2-json-schema";
import { readFileSync, writeFileSync } from "fs";
const schema = buildSchema(readFileSync("./schema.graphql", "utf8"));

const options = {
  // Whether or not to ignore GraphQL internals that are probably not relevant
  // to documentation generation.
  // Defaults to `true`
  ignoreInternals: true,
  // Whether or not to properly represent GraphQL Lists with Nullable elements
  // as type "array" with items being an "anyOf" that includes the possible
  // type and a "null" type.
  // Defaults to `false` for backwards compatibility, but in future versions
  // the effect of `true` is likely going to be the default and only way. It is
  // highly recommended that new implementations set this value to `true`.
  nullableArrayItems: true,
};

// schema is your GraphQL schema.
const introspection = graphqlSync(schema, getIntrospectionQuery()).data;

const jsonSchema = fromIntrospectionQuery(introspection, options);

writeFileSync("./json.schema.json", JSON.stringify(jsonSchema, null, 2));

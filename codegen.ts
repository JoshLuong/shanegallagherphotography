import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://graphql.contentful.com/content/v1/spaces/7quy4nqi53yl": {
        headers: {
          Authorization: "Bearer PfEBSBXzKgGX1sCdl8yJojYOPZGCYHaCdRiC-ouRE0w",
        },
      },
    },
  ],
  documents: ["src/**/*.tsx"],
  generates: {
    "./types/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
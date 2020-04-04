<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  gatsby-remark-remove-root-p-tag
</h1>

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> Create an issue for question, bug, idea, etc. PRs welcome 👍.
>
> If this plugin doesn't fulfill your use case, please create an issue to request the feature.

Removes the wrapping HTML `<p>` tag that `gatsby-transformer-remark` automatically adds during its markdown transformation process. The root `<p>` tag or root line break `\n` is preserved if it exists in the user-provided markdown.

## 🚀 Install

### Install

```shell
npm i gatsby-remark-remove-root-p-tag
```

```shell
yarn add gatsby-remark-remove-root-p-tag
```

### Configure 

Add plugin to the `gatsby-transformer-remark` plugins array in your `gatsby-config.js`:

```
...
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-remove-root-p-tag`,
            options: {
              parents: ["gatsby-plugin-json-remark", "default-site-plugin"] // Optional: will process only the MarkdownRemark nodes created by these plugins
            }
          },
...
```

## Usage Example

### gatsby-config.js
```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-remove-root-p-tag`,
            options: {
              parents: ["default-site-plugin"],
            },
          },
        ],
      },
    },
  ],
};
```

### gatsby-node.js

```javascript
const markdownContentNode = {
  id: createNodeId("this is a unique string >>> MyMarkdown"),
  internal: {
    content: "*some italic text*",
    type: `MyMarkdown`,
    mediaType: "text/markdown",
  },
};
markdownContentNode.internal.contentDigest = createContentDigest(
  JSON.stringify(markdownContentNode)
);
const markdownRemark = await createNode(markdownContentNode);
```
### GraphQL Schema / Query

The above setup will create a markdown node with the `<p>` tag removed: 

```graphql
query MyQuery {
  allMyMarkdown {
    edges {
      node {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
}
```

Query results:

```graphql
{
  "data": {
    "allMyMarkdown": {
      "edges": [
        {
          "node": {
            "childMarkdownRemark": {
              "html": "<em>some italic text</em>",
              "rawMarkdownBody": "*some italic text*"
            }
          }
        }
      ]
    }
  }
}
```

Without `gatsby-remark-remove-root-p-tag`, a `<p>` tag wraps the transformed HTML:

```graphql
{
  "data": {
    "allMyMarkdown": {
      "edges": [
        {
          "node": {
            "childMarkdownRemark": {
              "html": "<p><em>some italic text</em></p>",
              "rawMarkdownBody": "*some italic text*"
            }
          }
        }
      ]
    }
  }
}
```

## Requirements

+ Node >=12.16.1
+ Gatsby v2
<h1 align="center">
  gatsby-remark-remove-root-p-tag
</h1>

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> This plugin is in **beta**.
>
> Create an issue for question, bug, idea, etc. PRs welcome 👍.

Removes the `<p>` tag from the markdown AST that `gatsby-transformer-remark`, in some cases, automatically wraps around the markup it is given to process to HTML. `<p>` tags that are present in the input markdown content are preserved.

## 🚀 Install

1. Add the package to your site:

```shell
npm i gatsby-remark-remove-root-p-tag

yarn add gatsby-remark-remove-root-p-tag
```

2. Add plugin to the `gatsby-transformer-remark` plugins array in your `gatsby-config.js`:

```
...
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-remove-root-p-tag`,
            options: {
              parents: [`gatsby-plugin-json-remark`] // Optional: will process only the MarkdownRemark nodes created by these plugins
            }
          },
...
```

## Usage

After the above configuration is completed, processing is automatic.

## Requirements

+ Node >=12.16.1
+ Gatsby v2
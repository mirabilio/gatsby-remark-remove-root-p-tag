"use strict";

const selectAll = require(`unist-util-select`).selectAll;
const select = require(`unist-util-select`).select;

module.exports = (refs, pluginOptions) => {
  const { markdownAST } = refs;
  const { parents } = pluginOptions;
  const parent = refs.getNode(refs.markdownNode.parent);

  if (parents && !parents.includes(parent.internal.owner)) return;

  if (
    parent.internal.content.toLowerCase().startsWith("\n") ||
    parent.internal.content.toLowerCase().startsWith("\r") ||
    parent.internal.content.toLowerCase().startsWith("<p>")
  )
    return;

  const p = select("root > *:only-child", markdownAST);

  if (p && p.type === "paragraph") {
    markdownAST.children = selectAll("root > paragraph > *", markdownAST);
  }

  return markdownAST;
};

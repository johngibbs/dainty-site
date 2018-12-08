export function getCustomizations(colors, getTypeShade, getTokenColor) {
  // Based on `vs`

  return {
    'code[class*="language-"]': {
      fontFamily:
        '"overpass-mono", "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
      fontSize: 13
    },
    'pre[class*="language-"]': {
      lineHeight: 1.5,
      backgroundColor: colors.neutral[getTypeShade(0)]
    },
    comment: {
      color: getTokenColor("comment")
    },
    prolog: {
      color: getTokenColor("comment")
    },
    doctype: {
      color: getTokenColor("comment")
    },
    cdata: {
      color: getTokenColor("comment")
    },
    string: {
      color: getTokenColor("string")
    },
    punctuation: {
      color: getTokenColor("punctuation")
    },
    operator: {
      color: getTokenColor("operator")
    },
    url: {
      color: getTokenColor("url")
    },
    symbol: {
      color: getTokenColor("operator")
    },
    number: {
      color: getTokenColor("number")
    },
    boolean: {
      color: getTokenColor("literal")
    },
    variable: {
      color: getTokenColor("variable")
    },
    constant: {
      color: getTokenColor("constant")
    },
    atrule: {
      color: getTokenColor("keyword")
    },
    keyword: {
      color: getTokenColor("keyword")
    },
    "attr-value": {
      color: getTokenColor("string")
    },
    function: {
      color: getTokenColor("function")
    },
    selector: {
      color: getTokenColor("otherType")
    },
    "class-name": {
      color: getTokenColor("type")
    },
    ".language-json .token.property": {
      color: getTokenColor("property")
    },
    tag: {
      color: getTokenColor("type")
    },
    "attr-name": {
      color: getTokenColor("attributeName")
    },
    property: {
      color: getTokenColor("property")
    },
    regex: {
      color: getTokenColor("regex")
    },
    entity: {
      color: getTokenColor("type")
    },
    "directive.tag  .tag": {
      color: getTokenColor("type")
    }
  };
}

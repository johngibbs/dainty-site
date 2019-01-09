export function getCustomizations(getColor, getProperty, getTypeShade) {
  // Based on `vs`

  return {
    'code[class*="language-"]': {
      fontFamily: '"IBM Plex Mono", monospace',
      fontSize: 13
    },
    'pre[class*="language-"]': {
      lineHeight: 1.5,
      backgroundColor: getColor("neutral", getTypeShade(0))
    },
    comment: {
      color: getProperty("token.comment")
    },
    prolog: {
      color: getProperty("token.comment")
    },
    doctype: {
      color: getProperty("token.comment")
    },
    cdata: {
      color: getProperty("token.comment")
    },
    string: {
      color: getProperty("token.string")
    },
    punctuation: {
      color: getProperty("token.punctuation")
    },
    operator: {
      color: getProperty("token.operator")
    },
    url: {
      color: getProperty("token.url")
    },
    symbol: {
      color: getProperty("token.operator")
    },
    number: {
      color: getProperty("token.number")
    },
    boolean: {
      color: getProperty("token.literal")
    },
    variable: {
      color: getProperty("token.variable")
    },
    constant: {
      color: getProperty("token.constant")
    },
    atrule: {
      color: getProperty("token.keyword")
    },
    keyword: {
      color: getProperty("token.keyword")
    },
    "attr-value": {
      color: getProperty("token.string")
    },
    function: {
      color: getProperty("token.function")
    },
    selector: {
      color: getProperty("token.otherType")
    },
    "class-name": {
      color: getProperty("token.type")
    },
    ".language-json .token.property": {
      color: getProperty("token.property")
    },
    tag: {
      color: getProperty("token.type")
    },
    "attr-name": {
      color: getProperty("token.attributeName")
    },
    property: {
      color: getProperty("token.property")
    },
    regex: {
      color: getProperty("token.regex")
    },
    entity: {
      color: getProperty("token.type")
    },
    "directive.tag  .tag": {
      color: getProperty("token.type")
    }
  };
}

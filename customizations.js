export function getCustomizations(colors, getTypeShade, getTokenColor) {
  // Based on `vs`

  return {
    'code[class*="language-"]': {
      // color: "#393A34",
      fontFamily:
        '"overpass-mono", "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
      // direction: "ltr",
      // textAlign: "left",
      // whiteSpace: "pre",
      // wordSpacing: "normal",
      // wordBreak: "normal",
      fontSize: 13
      // lineHeight: 1.5,
      // MozTabSize: "4",
      // OTabSize: "4",
      // tabSize: "4",
      // WebkitHyphens: "none",
      // MozHyphens: "none",
      // msHyphens: "none",
      // hyphens: "none"
    },
    'pre[class*="language-"]': {
      // color: "#393A34",
      // fontFamily:
      // '"overpass-mono", "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
      // direction: "ltr",
      // textAlign: "left",
      // whiteSpace: "pre",
      // wordSpacing: "normal",
      // wordBreak: "normal",
      // fontSize: "0.95em",
      lineHeight: 1.5,
      // MozTabSize: "4",
      // OTabSize: "4",
      // tabSize: "4",
      // WebkitHyphens: "none",
      // MozHyphens: "none",
      // msHyphens: "none",
      // hyphens: "none",
      // margin: ".5em 0",
      // overflow: "auto",
      // border: "1px solid #dddddd",
      backgroundColor: colors.neutral[getTypeShade(0)]
    },
    'pre[class*="language-"]::-moz-selection': {
      background: "#C1DEF1"
    },
    'pre[class*="language-"] ::-moz-selection': {
      background: "#C1DEF1"
    },
    'code[class*="language-"]::-moz-selection': {
      background: "#C1DEF1"
    },
    'code[class*="language-"] ::-moz-selection': {
      background: "#C1DEF1"
    },
    'pre[class*="language-"]::selection': {
      background: "#C1DEF1"
    },
    'pre[class*="language-"] ::selection': {
      background: "#C1DEF1"
    },
    'code[class*="language-"]::selection': {
      background: "#C1DEF1"
    },
    'code[class*="language-"] ::selection': {
      background: "#C1DEF1"
    },
    ':not(pre) > code[class*="language-"]': {
      // padding: ".2em",
      // paddingTop: "1px",
      // paddingBottom: "1px",
      // background: "#f8f8f8",
      // border: "1px solid #dddddd"
    },
    comment: {
      color: getTokenColor("comment")
      // fontStyle: "italic"
    },
    prolog: {
      color: getTokenColor("comment")
      // fontStyle: "italic"
    },
    doctype: {
      color: getTokenColor("comment")
      // fontStyle: "italic"
    },
    cdata: {
      color: getTokenColor("comment")
      // fontStyle: "italic"
    },
    namespace: {
      Opacity: "1"
      // Opacity: ".7"
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
      color: getTokenColor("keyword")
    },
    variable: {
      color: getTokenColor("identifier")
    },
    constant: {
      color: getTokenColor("identifier")
    },
    inserted: {
      color: "#36acaa"
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
    // ".language-autohotkey .token.selector": {
    //   color: "#0000ff"
    // },
    // ".language-json .token.boolean": {
    //   color: "#0000ff"
    // },
    // ".language-json .token.number": {
    //   color: "#0000ff"
    // },
    // 'code[class*="language-css"]': {
    //   color: "#0000ff"
    // },
    function: {
      color: getTokenColor("function")
    },
    deleted: {
      color: "#9a050f"
    },
    // ".language-autohotkey .token.tag": {
    //   color: "#9a050f"
    // },
    selector: {
      color: getTokenColor("identifier")
    },
    // ".language-autohotkey .token.keyword": {
    //   color: "#00009f"
    // },
    important: {
      fontWeight: "bold"
    },
    bold: {
      fontWeight: "bold"
    },
    italic: {
      fontStyle: "italic"
    },
    "class-name": {
      color: getTokenColor("type")
    },
    ".language-json .token.property": {
      color: getTokenColor("type")
    },
    tag: {
      color: getTokenColor("type")
    },
    "attr-name": {
      color: getTokenColor("type")
    },
    property: {
      color: getTokenColor("identifier")
    },
    regex: {
      color: "#ff0000"
    },
    entity: {
      color: "#ff0000"
    },
    "directive.tag  .tag": {
      background: "#ffff00",
      color: "#393A34"
    },
    ".line-numbers .line-numbers-rows": {
      borderRightColor: "#a5a5a5"
    },
    ".line-numbers-rows > span:before": {
      color: "#2B91AF"
    },
    ".line-highlight": {
      background:
        "linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))"
    }
  };
}

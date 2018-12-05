import React from "react";
import { ColorsContext } from "../colors-context";

export const SyntaxHighlighterContainer = props => (
  <React.Fragment>
    <div>{props.children}</div>
    <style jsx>{`
      div {
        box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1875);
        ${props.height && `height: ${props.height}px`};
        padding: 16px 24px;
        overflow-x: auto;
        margin-bottom: 32px;
      }
    `}</style>
  </React.Fragment>
);

export const CodeSection = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <pre>
          <code>{props.children}</code>
        </pre>
        <style jsx>{`
          pre {
            border: 1px solid ${colors.neutral[getTypeShade(6)]};
            padding: 16px 24px;
            margin-bottom: 32px;
            overflow-x: auto;
          }

          code {
            font-family: "overpass-mono";
            font-size: 13px;
            color: ${colors.purple[getTypeShade(32)]};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Code = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <code>{props.children}</code>
        <style jsx>{`
          code {
            font-family: "overpass-mono";
            font-size: 87.5%;
            color: ${props.token === "punctuation"
              ? colors.neutral[getTypeShade(26)]
              : colors.purple[getTypeShade(32)]};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

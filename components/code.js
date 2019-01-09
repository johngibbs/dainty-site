import React from "react";
import { ColorsContext } from "../colors-context";
import { ScrollContainer } from "./core";

export const SyntaxHighlighterContainer = props => (
  <ColorsContext.Consumer>
    {({ getColor, getTypeShade }) => {
      let styles = {};

      if (props.border) {
        styles.border = `1px solid ${getColor("neutral", getTypeShade(3))}`;
      }

      if (props.boxShadow) {
        styles.boxShadow = `1px 2px 12.5px rgba(0, 0, 0, 0.1875)`;
      }

      return (
        <React.Fragment>
          <ScrollContainer marginBottom={32} {...styles}>
            <div>{props.children}</div>
          </ScrollContainer>
          <style jsx>{`
            div {
              ${props.height && `height: ${props.height}px`};
              padding: 16px 24px;
            }
          `}</style>
        </React.Fragment>
      );
    }}
  </ColorsContext.Consumer>
);

export const CodeSection = props => (
  <ColorsContext.Consumer>
    {({ getColor, getTypeShade }) => (
      <React.Fragment>
        <ScrollContainer
          marginBottom={32}
          border={`1px solid ${getColor("neutral", getTypeShade(3))}`}
        >
          <pre>
            <code>{props.children}</code>
          </pre>
        </ScrollContainer>
        <style jsx>{`
          pre {
            padding: 16px 24px;
            width: 100%;
            line-height: 1.5;
          }

          code {
            font-family: "IBM Plex Mono", monospace;
            color: ${getColor("purple", getTypeShade(13))};
          }

          @media (max-width: 1023.98px) {
            code {
              font-size: 12px;
            }
          }

          @media (min-width: 1024px) {
            code {
              font-size: 13px;
            }
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Code = props => (
  <ColorsContext.Consumer>
    {({ getColor, getTypeShade }) => (
      <React.Fragment>
        <code>{props.children}</code>
        <style jsx>{`
          code {
            font-family: "IBM Plex Mono", monospace;
            font-size: 87.5%;
            color: ${props.token === "punctuation"
              ? getColor("neutral", getTypeShade(10))
              : getColor("purple", getTypeShade(13))};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

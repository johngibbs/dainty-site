import React from "react";
import { ColorsContext } from "../colors-context";

export const List = props => (
  <React.Fragment>
    <ul>{props.children}</ul>
    <style jsx>{`
      ul {
        display: flex;
        overflow-x: auto;
        list-style: none;
        ${props.horizontal ? "flex-direction: row" : "flex-direction: column"};
        ${props.listStyle &&
          `padding-left: ${props.listStyle === "✓" ? "22px" : "18px"}`};
        ${!props.nested && "margin-bottom: 32px"};
        ${props.nested && "margin-bottom: 16px"};
      }

      @media (max-width: 1023.98px) {
        ul {
          ${props.small && "font-size: 15px;"};
        }
      }

      @media (min-width: 1024px) {
        ul {
          ${props.small && "font-size: 16px;"};
        }
      }
    `}</style>
  </React.Fragment>
);

export const ListItem = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <li>{props.children}</li>
        <style jsx>{`
          li {
            flex: 0 0 auto;
            ${props.horizontal && "margin-right: 64px"};
          }

          li:not(:last-child) {
            ${!props.horizontal && "margin-bottom: 12px"};
          }

          li:before {
            ${props.listStyle &&
              `
              display: inline-block;
              content: "${props.listStyle}";
              width: ${props.listStyle === "✓" ? "22px" : "18px"};
              margin-left: ${props.listStyle === "✓" ? "-22px" : "-18px"};
              color: ${
                props.listStyle === "✓"
                  ? colors.blueLessChroma[getTypeShade(24)]
                  : colors.neutral[getTypeShade(16)]
              };
            `};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

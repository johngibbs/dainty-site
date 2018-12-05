import React from "react";
import { ColorsContext } from "../colors-context";

export const Text = props => (
  <React.Fragment>
    <p>{props.children}</p>
    <style jsx>{`
      p {
        margin-bottom: 16px;
      }

      @media (max-width: 1023.98px) {
        p {
          ${props.small && "font-size: 14px"};
        }
      }

      @media (min-width: 1024px) {
        p {
          ${props.small && "font-size: 15px"};
        }
      }
    `}</style>
  </React.Fragment>
);

export const Bold = props => (
  <React.Fragment>
    <b>{props.children}</b>
    <style jsx>{`
      b {
        font-weight: 400;
      }
    `}</style>
  </React.Fragment>
);

export const HorizontalRule = () => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <hr />
        <style jsx>{`
          hr {
            border: 0;
            border-bottom: 1px solid ${colors.neutral[getTypeShade(6)]};
            margin: 64px 0;
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Heading = props => {
  const H = `h${props.level}`;

  return (
    <ColorsContext.Consumer>
      {({ colors, getTypeShade }) => (
        <React.Fragment>
          <H>{props.children}</H>
          <style jsx global>{`
            h1,
            h2,
            h3 {
              color: ${colors.blueLessChroma[getTypeShade(34)]};
            }

            h1 {
              font-weight: 300;
              margin-bottom: 24px;
            }

            h2 {
              font-weight: 300;
              margin-bottom: 16px;
            }

            h3 {
              font-weight: 400;
              margin-bottom: 16px;
            }

            @media (max-width: 1023.98px) {
              h1 {
                font-size: 30px;
              }

              h2 {
                font-size: 22px;
              }

              h3 {
                font-size: 16px;
              }
            }

            @media (min-width: 1024px) {
              h1 {
                font-size: 31px;
              }

              h2 {
                font-size: 23px;
              }

              h3 {
                font-size: 17px;
              }
            }
          `}</style>
        </React.Fragment>
      )}
    </ColorsContext.Consumer>
  );
};

export const Anchor = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        {props.href ? (
          <a href={props.href}>{props.children}</a>
        ) : (
          <a onClick={props.onClick}>{props.children}</a>
        )}
        <style jsx>{`
          a {
            color: ${colors.blueMoreChroma[getTypeShade(28)]};
            cursor: pointer;
            ${props.active && "font-weight: 400"};
            text-decoration: none;
          }

          a:hover {
            color: ${colors.blueMoreChroma[getTypeShade(32, 20)]};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

import React from "react";
import { ColorsContext } from "../colors-context";

export const Select = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <select {...props}>{props.children}</select>
        <style jsx>{`
          select {
            background-color: ${colors.neutral[getTypeShade(3)]};
            color: ${colors.neutral[getTypeShade(34)]};
            cursor: pointer;
            border: none;
            margin-bottom: 16px;
            padding: 12px 8px;
            font-family: inherit;
            font-size: 14px;
            font-weight: inherit;
          }

          select:hover {
            color: ${colors.neutral[getTypeShade(38)]};
            background-color: ${colors.neutral[getTypeShade(5)]};
          }

          select:focus {
            box-shadow: 0 0 0 1px ${colors.blueLessChroma[getTypeShade(16)]};
            outline: none;
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Option = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <option {...props}>{props.children}</option>
        <style jsx>{`
          option {
            background-color: ${colors.neutral[getTypeShade(3)]};
            color: ${colors.neutral[getTypeShade(34)]};
            font-weight: inherit;
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Label = props => (
  <ColorsContext.Consumer>
    {() => (
      <React.Fragment>
        <label {...props}>{props.children}</label>
        <style jsx>{`
          label {
            margin-bottom: 8px;
            font-size: 14px;
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Button = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <button>{props.children}</button>
        <style jsx>{`
          button {
            background-color: ${colors.blueMoreChroma[getTypeShade(8)]};
            color: ${colors.neutral[getTypeShade(40)]};
            font-family: inherit;
            font-size: inherit;
            font-weight: 400;
            padding: 16px 20px;
            border: 0;
            border-radius: 4px;
            ${props.small && "font-size: 16px"};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

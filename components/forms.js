import React from "react";
import { ColorsContext } from "../colors-context";

export const Select = props => (
  <ColorsContext.Consumer>
    {({ getColor, getTypeShade }) => (
      <React.Fragment>
        <select {...props}>{props.children}</select>
        <style jsx>{`
          select {
            background-color: ${getColor("neutral", getTypeShade(1))};
            color: ${getColor("neutral", getTypeShade(14))};
            cursor: pointer;
            border: none;
            margin-bottom: 16px;
            padding: 12px 8px;
            font-family: inherit;
            font-size: 14px;
            font-weight: inherit;
          }

          select:hover {
            color: ${getColor("neutral", getTypeShade(15))};
            background-color: ${getColor("neutral", getTypeShade(2))};
          }

          select:focus {
            box-shadow: 0 0 0 1px ${getColor("blueLessChroma", getTypeShade(6))};
            outline: none;
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Option = props => (
  <ColorsContext.Consumer>
    {({ getColor, getTypeShade }) => (
      <React.Fragment>
        <option {...props}>{props.children}</option>
        <style jsx>{`
          option {
            background-color: ${getColor("neutral", getTypeShade(1))};
            color: inherit;
            font-weight: inherit;
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Label = props => (
  <React.Fragment>
    <label {...props}>{props.children}</label>
    <style jsx>{`
      label {
        margin-bottom: 8px;
        font-size: 14px;
      }
    `}</style>
  </React.Fragment>
);

export const Button = props => (
  <ColorsContext.Consumer>
    {({ getColor, getTypeShade }) => (
      <React.Fragment>
        <button>{props.children}</button>
        <style jsx>{`
          button {
            background-color: ${getColor("blueMoreChroma", getTypeShade(3))};
            color: ${getColor("neutral", getTypeShade(16))};
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

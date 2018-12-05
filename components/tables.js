import React from "react";
import { ColorsContext } from "../colors-context";

export const Table = props => (
  <React.Fragment>
    <div>
      <table>{props.children}</table>
    </div>
    <style jsx>{`
      div {
        overflow-x: auto;
        margin-bottom: 32px;
      }

      table {
        border-collapse: collapse;
        width: 100%;
      }

      @media (max-width: 1023.98px) {
        div {
          font-size: 14px;
        }
      }

      @media (min-width: 1024px) {
        div {
          font-size: 15px;
        }
      }
    `}</style>
  </React.Fragment>
);

export const Tr = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <tr>{props.children}</tr>
        <style jsx>{`
          tr {
            border-bottom: 0.5px solid ${colors.neutral[getTypeShade(10)]};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Th = props => (
  <ColorsContext.Consumer>
    {() => (
      <React.Fragment>
        <th>{props.children}</th>
        <style jsx>{`
          text-align: left;
          font-weight: 400;
          padding: 16px;
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Td = props => (
  <ColorsContext.Consumer>
    {() => (
      <React.Fragment>
        <td>{props.children}</td>
        <style jsx>{`
          padding: 16px;
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

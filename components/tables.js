import React from "react";
import { ColorsContext } from "../colors-context";

export const Table = props => (
  <React.Fragment>
    <table>{props.children}</table>
    <style jsx>{`
      table {
        border-collapse: collapse;
        width: 100%;
        overflow-x: auto;
        margin-bottom: 32px;
      }

      @media (max-width: 1023.98px) {
        table {
          font-size: 14px;
        }
      }

      @media (min-width: 1024px) {
        table {
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
  <React.Fragment>
    <th>{props.children}</th>
    <style jsx>{`
      th {
        text-align: left;
        font-weight: 400;
        padding: 16px;
      }
    `}</style>
  </React.Fragment>
);

export const Td = props => (
  <React.Fragment>
    <td>{props.children}</td>
    <style jsx>{`
      td {
        padding: 16px;
      }
    `}</style>
  </React.Fragment>
);

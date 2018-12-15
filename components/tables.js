import React from "react";
import { ColorsContext } from "../colors-context";
import { ScrollContainer } from "./core";

export const Table = props => (
  <React.Fragment>
    <ScrollContainer marginBottom={32}>
      <table>{props.children}</table>
    </ScrollContainer>
    <style jsx>{`
      table {
        border-collapse: collapse;
        width: 100%;
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
    {({ getColor, getTypeShade }) => (
      <React.Fragment>
        <tr>{props.children}</tr>
        <style jsx>{`
          tr {
            border-bottom: 0.5px solid ${getColor("neutral", getTypeShade(4))};
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
        font-weight: 500;
        padding: 16px;
        white-space: nowrap;
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
        white-space: nowrap;
      }
    `}</style>
  </React.Fragment>
);

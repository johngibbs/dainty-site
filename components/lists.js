import React from "react";
import { ColorsContext } from "../colors-context";
import { ScrollContainer } from "./core";

export const List = props => (
  <React.Fragment>
    {props.noScrollContainer ? (
      <ul>{props.children}</ul>
    ) : (
      <ScrollContainer marginBottom={props.nested ? 16 : 32}>
        <ul>{props.children}</ul>
      </ScrollContainer>
    )}
    <style jsx>{`
      ul {
        display: flex;
        list-style: none;
        ${props.horizontal ? "flex-direction: row" : "flex-direction: column"};
        ${props.listStyle &&
          `padding-left: ${props.listStyle === "✓" ? "22px" : "18px"}`};
        align-items: flex-start;
      }
    `}</style>
  </React.Fragment>
);

export class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShaking: true
    };

    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver() {
    this.setState({ isShaking: false });
  }

  render() {
    return (
      <ColorsContext.Consumer>
        {({ getColor, getTypeShade }) => (
          <React.Fragment>
            <li
              className={
                this.props.shake &&
                this.state.isShaking &&
                "shake-slow shake-constant"
              }
              onMouseOver={this.onMouseOver}
            >
              {this.props.children}
            </li>
            <style jsx>{`
              li {
                flex: 0 0 auto;
                ${this.props.horizontal && "margin-right: 64px"};
                ${this.props.small && "font-size: 14px"};
              }

              li:not(:last-child) {
                ${!this.props.horizontal && "margin-bottom: 12px"};
              }

              li:before {
                ${this.props.listStyle &&
                  `
                display: inline-block;
                content: "${this.props.listStyle}";
                width: ${this.props.listStyle === "✓" ? "22px" : "18px"};
                margin-left: ${
                  this.props.listStyle === "✓" ? "-22px" : "-18px"
                };
                color: ${
                  this.props.listStyle === "✓"
                    ? getColor("neutral", getTypeShade(10))
                    : getColor("neutral", getTypeShade(6))
                };
              `};
              }
            `}</style>
          </React.Fragment>
        )}
      </ColorsContext.Consumer>
    );
  }
}

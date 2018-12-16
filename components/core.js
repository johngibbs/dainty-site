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

export const Small = props => (
  <React.Fragment>
    <small>{props.children}</small>
    <style jsx>{`
      @media (max-width: 1023.98px) {
        small {
          font-size: 14px;
        }
      }

      @media (min-width: 1024px) {
        small {
          font-size: 15px;
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
    {({ getColor, getTypeShade }) => (
      <React.Fragment>
        <hr />
        <style jsx>{`
          hr {
            border: 0;
            border-bottom: 1px solid ${getColor("neutral", getTypeShade(3))};
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
      {({ getColor, getTypeShade }) => (
        <React.Fragment>
          <H>{props.children}</H>
          <style jsx global>{`
            h1,
            h2,
            h3 {
              color: ${getColor("blueLessChroma", getTypeShade(14))};
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
    {({ getColor, getTypeShade }) => (
      <React.Fragment>
        {props.href ? (
          <a href={props.href}>{props.children}</a>
        ) : (
          <a onClick={props.onClick}>{props.children}</a>
        )}
        <style jsx>{`
          a {
            color: ${props.nav
              ? props.active
                ? getColor("neutral", getTypeShade(24, 0))
                : getColor("neutral", getTypeShade(10, 8))
              : getColor("blueMoreChroma", getTypeShade(11))};
            cursor: pointer;
            text-decoration: none;
          }

          a:hover {
            color: ${getColor("blueMoreChroma", getTypeShade(13, 8))};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export class ScrollContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollLeft: 0,
      doesOverflow: null
    };

    this.scrollContainer = React.createRef();

    this.onScroll = this.onScroll.bind(this);
    this.getOpacity = this.getOpacity.bind(this);
  }

  onScroll(event) {
    this.setState({ scrollLeft: event.target.scrollLeft });
  }

  getOpacity() {
    return Math.max(1 - this.state.scrollLeft / 128, 0);
  }

  componentDidMount() {
    const element = this.scrollContainer.current;

    this.setState({
      doesOverflow:
        element.offsetHeight < element.scrollHeight ||
        element.offsetWidth < element.scrollWidth
    });
  }

  render() {
    return (
      <ColorsContext.Consumer>
        {({ getColor, getTypeShade }) => (
          <React.Fragment>
            <div className="container" onScroll={this.onScroll}>
              <div
                ref={this.scrollContainer}
                className="scroll-container"
                onScroll={this.onScroll}
              >
                {this.props.children}
              </div>
              {this.state.doesOverflow && <div className="fade" />}
            </div>
            <style jsx>{`
              .container {
                position: relative;
                margin-bottom: ${this.props.marginBottom}px;
                ${this.props.border && `border: ${this.props.border}`};
                ${this.props.boxShadow &&
                  `box-shadow: ${this.props.boxShadow}`};
              }

              .scroll-container {
                overflow-x: auto;
                position: relative;
                z-index: 10;
              }

              .fade {
                pointer-events: none;
                z-index: 11;
                position: absolute;
                background: linear-gradient(
                  to right,
                  ${getColor("neutral", getTypeShade(0), 0)} 0%,
                  ${getColor("neutral", getTypeShade(0), 0)} 87.5%,
                  ${getColor(
                      "neutral",
                      getTypeShade(0),
                      this.getOpacity(this.ref)
                    )}
                    100%
                );
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
              }
            `}</style>
          </React.Fragment>
        )}
      </ColorsContext.Consumer>
    );
  }
}

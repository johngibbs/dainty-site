import React from "react";
import { ColorsContext } from "../colors-context";
import { Heading, Anchor } from "./core";
import { List, ListItem } from "./lists";
import { Section } from "./layout";
import changeCase from "change-case";

export class ScreenshotSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screenshot: Object.keys(props.screenshots)[0]
    };

    this.showScreenshot = this.showScreenshot.bind(this);
  }

  showScreenshot(screenshot) {
    this.setState({ screenshot });
    this.props.setPreset(screenshot);
  }

  render() {
    return (
      <Section>
        <Heading level={2}>Screenshots</Heading>
        <List horizontal>
          {Object.keys(this.props.screenshots).map(s => (
            <ListItem key={s} horizontal>
              <Anchor
                active={this.state.screenshot === s}
                onClick={() => this.showScreenshot(s)}
              >
                {this.props.screenshots[s]}
              </Anchor>
            </ListItem>
          ))}
        </List>
        <ScreenshotContainer>
          {Object.keys(this.props.screenshots).map(s => (
            <Screenshot
              key={s}
              horizontal
              visible={this.state.screenshot === s}
              src={`/static/${changeCase.paramCase(s)}-${
                this.props.application
              }.png`}
            />
          ))}
        </ScreenshotContainer>
      </Section>
    );
  }
}

export const ScreenshotContainer = props => (
  <ColorsContext.Consumer>
    {() => (
      <React.Fragment>
        <div>{props.children}</div>
        <style jsx>{`
          div {
            box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1875);
            position: relative;
            padding-bottom: 75%;
            height: 0;
            overflow: hidden;
          }

          @media (min-width: 1024px) {
            div {
              transition: opacity 0.375s ease;
            }
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Screenshot = props => (
  <React.Fragment>
    <img src={props.src} />
    <style jsx>{`
      img {
        left: 0;
        top: 0;
        width: 100%;
        ${props.first ? "position: relative" : "position: absolute"};
        ${!props.visible && "opacity: 0"};
      }
    `}</style>
  </React.Fragment>
);

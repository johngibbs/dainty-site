import React from "react";
import { ColorsContext } from "../colors-context";
import { Heading, Anchor, Text } from "./core";
import { Code } from "./code";
import { List, ListItem } from "./lists";
import { Section, Subsection } from "./layout";
import changeCase from "change-case";
import { presets } from "dainty-shared/src/presets-web";

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
        <Heading level={2}>Presets</Heading>
        {Object.keys(this.props.screenshots).map(s => (
          <Subsection>
            <Heading level={3}>
              {this.props.screenshots[s]} (
              <Code>`{changeCase.paramCase(s)}`</Code>)
            </Heading>
            <ScreenshotContainer>
              <Screenshot
                key={s}
                src={`/static/${this.props.application}-${changeCase.paramCase(
                  s
                )}.png`}
              />
            </ScreenshotContainer>
          </Subsection>
        ))}
        <Subsection>
          <Heading level={3}>Additional presets</Heading>
          <Text small>
            {Object.keys(presets)
              .filter(
                preset => !Object.keys(this.props.screenshots).includes(preset)
              )
              .map(preset => (
                <span
                  style={{
                    marginRight: 24,
                    marginBottom: 12,
                    display: "inline-block"
                  }}
                >
                  {presets[preset].name} (
                  <Code>`{changeCase.paramCase(preset)}`</Code>)
                </span>
              ))}
          </Text>
        </Subsection>
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
        width: 100%;
      }

      @media (min-width: 1024px) {
        img {
          transition: opacity 0.375s ease;
        }
      }
    `}</style>
  </React.Fragment>
);

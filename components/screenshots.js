import React from "react";
import { ColorsContext } from "../colors-context";
import { Heading, Text } from "./core";
import { Code } from "./code";
import { Section, Subsection } from "./layout";
import changeCase from "change-case";
import { presets } from "dainty-shared/src/presets-web";

export class ScreenshotSection extends React.Component {
  render() {
    return (
      <Section>
        <Heading level={2}>Presets</Heading>
        {Object.keys(this.props.screenshots).map(screenshot => (
          <Subsection key={screenshot}>
            <Heading level={3}>
              {this.props.screenshots[screenshot]} (
              <Code>`{changeCase.paramCase(screenshot)}`</Code>)
            </Heading>
            <ScreenshotContainer>
              <Screenshot
                src={`/static/${this.props.application}-${changeCase.paramCase(
                  screenshot
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
                  key={preset}
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

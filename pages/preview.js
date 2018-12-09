import React from "react";
import changeCase from "change-case";
import { ColorsContext } from "../colors-context";
import { getCustomizations } from "../customizations";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import csharp from "react-syntax-highlighter/dist/cjs/languages/prism/csharp";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import elixir from "react-syntax-highlighter/dist/cjs/languages/prism/elixir";

import { presets } from "dainty-shared/presets-web";
import { examples } from "../examples";

import { Code, SyntaxHighlighterContainer } from "../components/code";
import { Heading, Text } from "../components/core";
import { List, ListItem } from "../components/lists";
import { Section, Subsection } from "../components/layout";
import { Select, Label, Option } from "../components/forms";
import { Slider } from "../components/sliders";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("csharp", csharp);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("elixir", elixir);

class Preview extends React.Component {
  constructor(props) {
    super(props);

    this.onLightessStartChange = this.onLightessStartChange.bind(this);
    this.onLightnessEndChange = this.onLightnessEndChange.bind(this);
    this.onChromaChange = this.onChromaChange.bind(this);
    this.onPresetChange = this.onPresetChange.bind(this);
    this.onExampleChange = this.onExampleChange.bind(this);

    this.state = {
      example: "jsx"
    };
  }

  onLightessStartChange(sliderValue) {
    this.props.setLightnessStart(sliderValue);
  }

  onLightnessEndChange(sliderValue) {
    this.props.setLightnessEnd(sliderValue);
  }

  onChromaChange(sliderValue) {
    this.props.setChroma(sliderValue);
  }

  onPresetChange(event) {
    this.props.setPreset(event.target.value);
  }

  onExampleChange(event) {
    this.setState({ example: event.target.value });
  }

  getConfiguration(preset, lightnessStart, lightnessEnd, chroma) {
    return `{
  "preset": "${changeCase.paramCase(preset)}",
  "colors": {
    "_adjustments": {
      "lightnessStart": ${lightnessStart},
      "lightnessEnd": ${lightnessEnd},
      "chroma": ${chroma}
    }
  }
}`;
  }

  render() {
    return (
      <ColorsContext.Consumer>
        {({
          colors,
          preset,
          getProperty,
          getTypeShade,
          lightnessStart,
          lightnessEnd,
          chroma
        }) => (
          <>
            <Heading level={1}>Dainty – Preview</Heading>
            <Section>
              <div style={{ display: "flex", marginBottom: 32 }}>
                <div
                  style={{
                    flex: "0 0 calc(60% - 16px)",
                    display: "flex",
                    flexDirection: "column",
                    marginRight: 16
                  }}
                >
                  <div
                    style={{
                      flex: "0 0 auto",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Label>
                      Lightness start
                      {lightnessStart !== 0 && `: ${lightnessStart}`}
                    </Label>
                    <Slider
                      step={0.5}
                      value={lightnessStart}
                      min={-32}
                      max={32}
                      onChange={this.onLightessStartChange}
                    />
                  </div>
                  <div
                    style={{
                      flex: "0 0 auto",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Label>
                      Lightness end
                      {lightnessEnd !== 0 && `: ${lightnessEnd}`}
                    </Label>
                    <Slider
                      step={0.5}
                      value={lightnessEnd}
                      min={-32}
                      max={32}
                      onChange={this.onLightnessEndChange}
                    />
                  </div>
                  <div
                    style={{
                      flex: "0 0 auto",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Label>
                      Chroma
                      {chroma !== 0 && `: ${chroma}`}
                    </Label>
                    <Slider
                      step={0.5}
                      value={chroma}
                      min={-32}
                      max={32}
                      onChange={this.onChromaChange}
                    />
                  </div>
                </div>
                <div
                  style={{
                    flex: "0 0 calc(40% - 16px)",
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 16
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flex: "1 0 auto",
                      flexDirection: "column"
                    }}
                  >
                    <Label>Preset</Label>
                    <Select onChange={this.onPresetChange} value={preset}>
                      {Object.keys(presets).map(p => (
                        <Option key={p} value={p}>
                          {presets[p].name}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flex: "1 0 auto",
                      flexDirection: "column"
                    }}
                  >
                    <Label>Example</Label>
                    <Select
                      onChange={this.onExampleChange}
                      value={this.state.example}
                    >
                      {Object.keys(examples).map(e => (
                        <Option key={e} value={e}>
                          {examples[e].name}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
              <SyntaxHighlighterContainer boxShadow>
                <SyntaxHighlighter
                  language={this.state.example}
                  style={getCustomizations(colors, getProperty, getTypeShade)}
                >
                  {examples[this.state.example].code}
                </SyntaxHighlighter>
              </SyntaxHighlighterContainer>
            </Section>
            <Section>
              <Heading level={2}>
                <Code>`configuration.jsonc`</Code>
              </Heading>
              <SyntaxHighlighterContainer border>
                <SyntaxHighlighter
                  language="javascript"
                  style={getCustomizations(colors, getProperty, getTypeShade)}
                >
                  {this.getConfiguration(
                    preset,
                    lightnessStart,
                    lightnessEnd,
                    chroma
                  )}
                </SyntaxHighlighter>
              </SyntaxHighlighterContainer>
              <Subsection>
                <List listStyle="–">
                  <ListItem listStyle="–">
                    Clone the repository for{" "}
                    <Code>`dainty-&lt;application&gt;`</Code>
                  </ListItem>
                  <ListItem listStyle="–">
                    Copy the configuration above to{" "}
                    <Code>`configuration.jsonc`</Code>
                  </ListItem>
                  <ListItem listStyle="–">
                    Run <Code>`yarn build -i`</Code>
                  </ListItem>
                </List>
              </Subsection>
              <Subsection>
                <Text small>
                  <i>
                    The <Code>`-i`</Code> flag installs the color theme. Running{" "}
                    <Code>`yarn build`</Code> with <Code>-i</Code> is currently
                    not supported by <Code>`dainty-vs`</Code>.
                  </i>
                </Text>
              </Subsection>
            </Section>
          </>
        )}
      </ColorsContext.Consumer>
    );
  }
}

export default Preview;

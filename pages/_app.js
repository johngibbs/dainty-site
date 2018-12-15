import React from "react";
import App, { Container } from "next/app";
import {
  getColorFunction,
  getPropertyFunction,
  getTypeShadeFunction
} from "dainty-shared/src/colors";
import { presets } from "dainty-shared/presets-web";
import { Page, SiteContainer, Content, Sidebar } from "../components/layout";
import { ColorsContext } from "../colors-context";

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      preset: "daintyLight",
      configuration: presets.daintyLight,
      lightnessStart: 0,
      lightnessEnd: 0,
      chroma: 0
    };

    this.updatePreset = this.updatePreset.bind(this);
    this.setPreset = this.setPreset.bind(this);
    this.setLightnessStart = this.setLightnessStart.bind(this);
    this.setLightnessEnd = this.setLightnessEnd.bind(this);
    this.setChroma = this.setChroma.bind(this);
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  updatePreset(
    preset = this.state.preset,
    lightnessStart = this.state.lightnessStart,
    lightnessEnd = this.state.lightnessEnd,
    chroma = this.state.chroma
  ) {
    let configuration = JSON.parse(JSON.stringify(presets[preset]));

    configuration.colors._adjustments = {
      lightnessStart,
      lightnessEnd,
      chroma
    };

    this.setState({
      configuration,
      lightnessStart,
      lightnessEnd,
      chroma
    });
  }

  setPreset(preset) {
    const configuration = presets[preset];

    this.setState({
      preset,
      configuration,
      lightnessStart: 0,
      lightnessEnd: 0,
      chroma: 0
    });
  }

  setLightnessStart(value) {
    this.updatePreset(this.state.preset, value);
  }

  setLightnessEnd(value) {
    this.updatePreset(this.state.preset, this.state.lightnesStart, value);
  }

  setChroma(value) {
    this.updatePreset(
      this.state.preset,
      this.state.lightnesStart,
      this.state.lightnessEnd,
      value
    );
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ColorsContext.Provider
          value={{
            preset: this.state.preset,
            configuration: this.state.configuration,
            getColor: getColorFunction(this.state.configuration),
            getProperty: getPropertyFunction(
              this.state.configuration,
              getColorFunction(this.state.configuration)
            ),
            getTypeShade: getTypeShadeFunction(this.state.configuration),
            lightnessStart: this.state.lightnessStart,
            lightnessEnd: this.state.lightnessEnd,
            chroma: this.state.chroma
          }}
        >
          <SiteContainer>
            <Page>
              <Sidebar />
              <Content>
                <Component
                  {...pageProps}
                  setPreset={this.setPreset}
                  setLightnessStart={this.setLightnessStart}
                  setLightnessEnd={this.setLightnessEnd}
                  setChroma={this.setChroma}
                />
              </Content>
            </Page>
          </SiteContainer>
        </ColorsContext.Provider>
      </Container>
    );
  }
}

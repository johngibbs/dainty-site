import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ColorsContext } from "../colors-context";
import { alpha } from "dainty-shared/src/colors";
import RcSlider from "rc-slider";
import { withRouter } from "next/router";
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
    {({ colors, getTypeShade }) => (
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
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <img src={props.src} />
        <style jsx>{`
          img {
            left: 0;
            top: 0;
            width: 100%;
            transition: opacity 0.5s ease;
            ${props.first ? "position: relative" : "position: absolute"};
            ${!props.visible && "opacity: 0"};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const SiteContainer = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <GitHubCorner />

        <Head>
          <meta charSet="utf-8" />
          <title>Dainty</title>
          <meta
            name="description"
            content="Dainty is a color theme generator. Dainty Light and Dainty Dark are the default presets of Dainty. They’re balanced and refined color themes using carefully selected colors within the CIELAB color space."
          />
          <meta property="og:title" content="Dainty for Visual Studio" />
          <meta
            property="og:description"
            content="Dainty is a color theme generator. Dainty Light and Dainty Dark are the default presets of Dainty. They’re balanced and refined color themes using carefully selected colors within the CIELAB color space."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>{`
          @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i');
          @import url('https://overpass-30e2.kxcdn.com/overpass-mono.css');

          body {
            background-color: ${colors.neutral[getTypeShade(0)]};
          }

          * {
            transition: background-color 0.5s ease;
          }

          * { margin: 0; padding: 0; box-sizing: border-box; }
        `}</style>
        </Head>
        <div>{props.children}</div>
        <style jsx>{`
          div {
            font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
              Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
              Segoe UI Symbol;
            color: ${colors.neutral[getTypeShade(34, 0)]};
            font-weight: 300;
            line-height: 1.875;
          }

          @media (max-width: 1023.98px) {
            div {
              font-size: 16px;
            }
          }

          @media (min-width: 1024px) {
            div {
              font-size: 17px;
            }
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

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

export const Button = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <button>{props.children}</button>
        <style jsx>{`
          button {
            background-color: ${colors.blueMoreChroma[getTypeShade(8)]};
            color: ${colors.neutral[getTypeShade(40)]};
            font-family: inherit;
            font-size: inherit;
            font-weight: 400;
            padding: 16px 20px;
            border: 0;
            border-radius: 4px;
            ${props.small && "font-size: 16px"};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const GitHubCorner = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <a
          href="https://github.com/alexanderte"
          className="github-corner"
          aria-label="View source on GitHub"
        >
          <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style={{ transformOrigin: "130px 106px" }}
              className="octo-arm"
            />
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              className="octo-body"
            />
          </svg>
        </a>

        <style jsx>{`
          /* https://github.com/tholman/github-corners */

          .github-corner:hover .octo-arm {
            animation: octocat-wave 560ms ease-in-out;
          }

          @keyframes octocat-wave {
            0%,
            100% {
              transform: rotate(0);
            }

            20%,
            60% {
              transform: rotate(-25deg);
            }

            40%,
            80% {
              transform: rotate(10deg);
            }
          }

          @media (max-width: 500px) {
            .github-corner:hover .octo-arm {
              animation: none;
            }

            .github-corner .octo-arm {
              animation: octocat-wave 560ms ease-in-out;
            }
          }

          .github-corner {
            fill: ${alpha(colors.neutral[getTypeShade(4)], 0.75)};
            color: ${colors.blue[getTypeShade(36)]};
            position: fixed;
            top: 0;
            border: 0;
            right: 0;
            z-index: 1;
            transition: fill 0.1875s ease;
          }

          .github-corner:hover {
            fill: ${colors.neutral[getTypeShade(4)]};
            color: ${colors.blue[getTypeShade(36)]};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Small = props => (
  <React.Fragment>
    <span>{props.children}</span>
    <style jsx>{`
      @media (max-width: 1023.98px) {
        span {
          font-size: 14px;
        }
      }

      @media (min-width: 1024px) {
        span {
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
    {({ colors, getTypeShade }) => (
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
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <td>{props.children}</td>
        <style jsx>{`
          padding: 16px;
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const SyntaxHighlighterContainer = props => (
  <React.Fragment>
    <div>{props.children}</div>
    <style jsx>{`
      div {
        box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1875);
        ${props.height && `height: ${props.height}px`};
        padding: 16px 24px;
        overflow-x: auto;
        margin-bottom: 32px;
      }
    `}</style>
  </React.Fragment>
);

export const CodeSection = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <div>
          <pre>
            <code>{props.children}</code>
          </pre>
        </div>
        <style jsx>{`
          div {
            border: 1px solid ${colors.neutral[getTypeShade(6)]};
            padding: 16px 24px;
            margin-bottom: 32px;
          }

          code {
            font-family: "overpass-mono";
            font-size: 14px;
            color: ${colors.purple[getTypeShade(32)]};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Code = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <code>{props.children}</code>
        <style jsx>{`
          code {
            font-family: "overpass-mono";
            font-size: 87.5%;
            color: ${colors.purple[
              getTypeShade(props.token === "punctuation" ? 12 : 32)
            ]};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const HorizontalRule = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <hr />
        <style jsx>{`
          hr {
            border: 0;
            border-bottom: 1px solid ${colors.neutral[getTypeShade(6)]};
            margin-bottom: 64px;
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Page = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <div>{props.children}</div>
        <style jsx>{`
          div {
            display: flex;
          }

          @media (max-width: 1279.98px) {
            div {
              width: 100%;
              padding: 0 24px;
            }
          }

          @media (min-width: 1280px) {
            div {
              width: 1280px;
              margin: 0 auto;
            }
          }

          @media (max-width: 1439.98px) {
            div {
              flex-direction: column;
              margin-top: 32px;
            }
          }

          @media (min-width: 1440px) {
            div {
              margin-top: 64px;
            }
          }

          @media (min-width: 1760px) {
            div {
            }
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const List = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <ul>{props.children}</ul>
        <style jsx>{`
          ul {
            ${!props.nested && "margin-bottom: 16px"};
            ${props.nested && "margin-bottom: 16px"};
            list-style: none;
            ${props.listStyle &&
              `padding-left: ${props.listStyle === "✓" ? "22px" : "18px"}`};
            display: flex;
            ${props.horizontal
              ? "flex-direction: row"
              : "flex-direction: column"};
          }

          @media (max-width: 1023.98px) {
            ul {
              font-size: 15px;
            }
          }

          @media (min-width: 1024px) {
            ul {
              font-size: 16px;
            }
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const ListItem = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <li>{props.children}</li>
        <style jsx>{`
          li {
            flex: 0 0 auto;
            ${props.horizontal && "margin-right: 64px"};
          }

          li:not(:last-child) {
            ${!props.horizontal && "margin-bottom: 12px"};
          }

          li:before {
            ${props.listStyle &&
              `
            display: inline-block;
            content: "${props.listStyle}";
            width: ${props.listStyle === "✓" ? "22px" : "18px"};
            margin-left: ${props.listStyle === "✓" ? "-22px" : "-18px"};
            color: ${
              props.listStyle === "✓"
                ? colors.blueLessChroma[getTypeShade(24)]
                : colors.neutral[getTypeShade(16)]
            };
            `};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Section = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <section {...props}>{props.children}</section>
        <style jsx>{`
          section {
            margin-bottom: 48px;
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Subsection = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <div {...props}>{props.children}</div>
        <style jsx>{`
          div {
            margin-bottom: 32px;
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Slider = props => {
  return (
    <ColorsContext.Consumer>
      {({ colors, getTypeShade }) => (
        <React.Fragment>
          <RcSlider style={{ marginBottom: 16 }} {...props} />
          <style jsx global>{`
            .rc-slider {
              position: relative;
              height: 14px;
              padding: 5px 0;
              width: 100%;
              border-radius: 6px;
              -ms-touch-action: none;
              touch-action: none;
              box-sizing: border-box;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
            .rc-slider * {
              box-sizing: border-box;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
            .rc-slider-rail {
              position: absolute;
              width: 100%;
              background-color: ${colors.neutral[getTypeShade(3)]};
              height: 4px;
              border-radius: 6px;
            }
            .rc-slider-track {
              position: absolute;
              left: 0;
              height: 4px;
              border-radius: 6px;
              background-color: ${colors.neutral[getTypeShade(12)]};
            }
            .rc-slider-handle {
              position: absolute;
              margin-left: -7px;
              margin-top: -5px;
              width: 14px;
              height: 14px;
              cursor: pointer;
              cursor: -webkit-grab;
              cursor: grab;
              border-radius: 50%;
              border: solid 2px ${colors.neutral[getTypeShade(16)]};
              background-color: ${colors.neutral[40]};
              -ms-touch-action: pan-x;
              touch-action: pan-x;
            }
            .rc-slider-handle:focus {
              border-color: ${colors.neutral[getTypeShade(20)]};
              box-shadow: 0 0 0 5px ${colors.neutral[getTypeShade(16)]};
              outline: none;
            }
            .rc-slider-handle-click-focused:focus {
              border-color: ${colors.neutral[getTypeShade(16)]};
              box-shadow: unset;
            }
            .rc-slider-handle:hover {
              border-color: ${colors.neutral[getTypeShade(20)]};
            }
            .rc-slider-handle:active {
              border-color: ${colors.neutral[getTypeShade(20)]};
              box-shadow: 0 0 5px ${colors.neutral[getTypeShade(20)]};
              cursor: -webkit-grabbing;
              cursor: grabbing;
            }
            .rc-slider-mark {
              position: absolute;
              top: 18px;
              left: 0;
              width: 100%;
              font-size: 12px;
            }
            .rc-slider-mark-text {
              position: absolute;
              display: inline-block;
              vertical-align: middle;
              text-align: center;
              cursor: pointer;
              color: #999;
            }
            .rc-slider-mark-text-active {
              color: #666;
            }
            .rc-slider-step {
              position: absolute;
              width: 100%;
              height: 4px;
              background: transparent;
            }
            .rc-slider-dot {
              position: absolute;
              bottom: -2px;
              margin-left: -4px;
              width: 8px;
              height: 8px;
              border: 2px solid #e9e9e9;
              background-color: #fff;
              cursor: pointer;
              border-radius: 50%;
              vertical-align: middle;
            }
            .rc-slider-dot-active {
              border-color: #96dbfa;
            }
          `}</style>
        </React.Fragment>
      )}
    </ColorsContext.Consumer>
  );
};

export const Heading = props => {
  const H = `h${props.level}`;

  return (
    <ColorsContext.Consumer>
      {({ colors, getTypeShade }) => (
        <React.Fragment>
          <H>{props.children}</H>
          <style jsx global>{`
            h1,
            h2,
            h3 {
              color: ${colors.blueLessChroma[getTypeShade(34)]};
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
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <a {...props}>{props.children}</a>
        <style jsx>{`
          a {
            color: ${colors.blueMoreChroma[getTypeShade(28)]};
            cursor: pointer;
            ${props.active && "font-weight: 400"};
            text-decoration: none;
          }

          a:hover {
            color: ${colors.blueMoreChroma[getTypeShade(32, 20)]};
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Sidebar = withRouter(({ router }) => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <div className="sidebar">
          <Subsection>
            <Heading level={3}>Dainty</Heading>
            <List>
              <ListItem>
                <Link href="/">
                  <Anchor active={router.pathname === "/"}>Overview</Anchor>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/preview" prefetch>
                  <Anchor active={router.pathname === "/preview"}>
                    Preview
                  </Anchor>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/configuration" prefetch>
                  <Anchor active={router.pathname === "/configuration"}>
                    Configuration
                  </Anchor>
                </Link>
              </ListItem>
            </List>
          </Subsection>
          <Subsection>
            <Heading level={3}>Applications</Heading>
            <List>
              <ListItem>
                <Link href="/vscode" prefetch>
                  <Anchor active={router.pathname === "/vscode"}>
                    Visual Studio Code
                  </Anchor>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/vs" prefetch>
                  <Anchor active={router.pathname === "/vs"}>
                    Visual Studio
                  </Anchor>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/wsltty" prefetch>
                  <Anchor active={router.pathname === "/wsltty"}>
                    WSLtty/Mintty
                  </Anchor>
                </Link>
              </ListItem>
            </List>
          </Subsection>
        </div>
        <style jsx>{`
          width: 256px;
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
));

export const Content = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <div>
          <Section>{props.children}</Section>
          <HorizontalRule />
          <Section>
            <Heading level={3}>Credits</Heading>
            <Text small>
              Design and development by{" "}
              <Anchor href="https://github.com/alexanderte">
                <Bold>Alexander Teinum</Bold>.
              </Anchor>
            </Text>
          </Section>
          <Section>
            <Heading level={3}>License</Heading>
            <Text small>
              Dainty is licensed under the{" "}
              <Anchor href="https://github.com/alexanderte/dainty-shared/blob/master/license.md">
                <Bold>MIT License</Bold>
              </Anchor>
              .
            </Text>
          </Section>
          <Section>
            <Heading level={3}>Share</Heading>
            <List horizontal>
              <ListItem horizontal>
                <Anchor href="https://twitter.com/home?status=Make%20your%20code%20look%20dainty.%20Use%20Dainty.%20😏%20https%3A//dainty.site">
                  <Small>Share on Twitter</Small>
                </Anchor>
              </ListItem>
              <ListItem horizontal>
                <Anchor href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//dainty.site&title=Make%20your%20code%20look%20dainty.%20Use%Dainty%20😏.&summary=&source=">
                  <Small>Share on LinkedIn</Small>
                </Anchor>
              </ListItem>
            </List>
          </Section>
        </div>
        <style jsx>{`
          @media (max-width: 1023.98px) {
            width: 100%;
          }

          @media (min-width: 1024px) {
            width: 1024px;
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Select = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <select {...props}>{props.children}</select>
        <style jsx>{`
          select {
            background-color: ${colors.neutral[getTypeShade(3)]};
            color: ${colors.neutral[getTypeShade(34)]};
            cursor: pointer;
            border: none;
            margin-bottom: 16px;
            padding: 12px 8px;
            font-family: inherit;
            font-size: 14px;
            font-weight: inherit;
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Option = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <option {...props}>{props.children}</option>
        <style jsx>{`
          option {
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export const Label = props => (
  <ColorsContext.Consumer>
    {({ colors, getTypeShade }) => (
      <React.Fragment>
        <label {...props}>{props.children}</label>
        <style jsx>{`
          label {
            margin-bottom: 8px;
            font-size: 14px;
          }
        `}</style>
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

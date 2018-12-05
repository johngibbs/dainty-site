import React from "react";
import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import { ColorsContext } from "../colors-context";
import { GitHubCorner } from "../components/github-corner";
import {
  Heading,
  Anchor,
  HorizontalRule,
  Text,
  Bold,
  Small
} from "../components/core";
import { List, ListItem } from "../components/lists";

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
          @import url('https://csshake.surge.sh/csshake.min.css');

          body {
            background-color: ${colors.neutral[getTypeShade(0)]};
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          @media (min-width: 1024px) {
            * {
              transition: background-color 0.25s ease;
            }
          }
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

export const Page = props => (
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
          transform: translateX(-64px);
        }
      }
    `}</style>
  </React.Fragment>
);

export const Section = props => (
  <React.Fragment>
    <section {...props}>{props.children}</section>
    <style jsx>{`
      section {
        margin-bottom: 48px;
      }
    `}</style>
  </React.Fragment>
);

export const Subsection = props => (
  <React.Fragment>
    <div {...props}>{props.children}</div>
    <style jsx>{`
      div {
        margin-bottom: 32px;
      }
    `}</style>
  </React.Fragment>
);

export const Sidebar = withRouter(({ router }) => (
  <React.Fragment>
    <div className="sidebar">
      <Subsection>
        <Heading level={3}>Dainty</Heading>
        <List small>
          <ListItem>
            <Link href="/">
              <Anchor active={router.pathname === "/"}>Overview</Anchor>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/preview" prefetch>
              <Anchor active={router.pathname === "/preview"}>Preview</Anchor>
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
        <List small>
          <ListItem>
            <Link href="/vscode" prefetch>
              <Anchor active={router.pathname === "/vscode"}>
                Visual Studio Code
              </Anchor>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/vs" prefetch>
              <Anchor active={router.pathname === "/vs"}>Visual Studio</Anchor>
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
      div {
        width: 256px;
      }
    `}</style>
  </React.Fragment>
));

export const Content = props => (
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
            <Anchor href="https://twitter.com/home?status=Dainty%20–%20A%20delicious%20color%20theme%20generator%20using%20CIELAB%20https%3A//dainty.site">
              <Small>Share on Twitter</Small>
            </Anchor>
          </ListItem>
          <ListItem horizontal>
            <Anchor href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A//dainty.site&amp;title=Dainty%20–%20A%20delicious%20color%20theme%20generator%20using%20CIELAB&amp;summary=&amp;source=">
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
);

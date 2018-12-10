import Link from "next/link";
import { Code, CodeSection } from "../components/code";
import { Heading, Text, Anchor, Bold } from "../components/core";
import { List, ListItem } from "../components/lists";
import { Section } from "../components/layout";
import { ScreenshotSection } from "../components/screenshots";
import { screenshots } from "../screenshots";

const VSCode = props => (
  <>
    <Section>
      <Heading level={1}>Dainty for Visual Studio Code</Heading>
      <Text>
        Dainty is a <Bold>color theme generator</Bold> with support for{" "}
        <Bold>Visual Studio Code</Bold>. It comes with default presets{" "}
        <Bold>Dainty Dark</Bold> and <Bold>Dainty Light</Bold>. They’re refined
        and balanced color themes, using carefully selected colors within the{" "}
        <Bold>Lab color space</Bold>. Dainty also comes with{" "}
        <Bold>popular color themes</Bold> as presets, and presets based on
        brands.
      </Text>
    </Section>
    <Section>
      <Heading level={2}>Features</Heading>
      <List listStyle="✓">
        <ListItem listStyle="✓">
          Colors are processed within the Lab color space
        </ListItem>
        <ListItem listStyle="✓">Punctuation marks are slightly dimmed</ListItem>
        <ListItem listStyle="✓">
          Workbench is less busy than in the default/original themes
        </ListItem>
      </List>
    </Section>
    <ScreenshotSection
      screenshots={screenshots}
      application="vscode"
      setPreset={props.setPreset}
    />
    <Section>
      <Heading level={2}>Get it</Heading>
      <CodeSection>{`git clone https://github.com/alexanderte/dainty-vscode.git
cd dainty-vscode
yarn
`}</CodeSection>
      <Heading level={3}>
        Install theme into your <Code>`settings.json`</Code>
      </Heading>
      <CodeSection>{`yarn build -i`}</CodeSection>
    </Section>
    <Section>
      <Heading level={2}>Configuration</Heading>
      <Text>
        Dainty can be configured by editing <Code>`configuration.jsonc`</Code>.
        The file is generated if it doesn’t exist while running{" "}
        <Code>`yarn build`</Code>. See{" "}
        <Link href="/configuration">
          <Anchor>
            <Bold>Configuration</Bold>
          </Anchor>
        </Link>{" "}
        for more information.
      </Text>
    </Section>
  </>
);

export default VSCode;

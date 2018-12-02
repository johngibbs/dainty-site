import {
  Heading,
  Section,
  List,
  ListItem,
  Anchor,
  Text,
  Code,
  Bold,
  CodeSection,
  ScreenshotSection
} from "../components/core";
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
        <Bold>CIELAB color space</Bold>. Dainty also comes with presets based on{" "}
        <Bold>popular color themes</Bold> and brands.
      </Text>
    </Section>
    <Section>
      <Heading level={2}>Features</Heading>
      <List listStyle="✓">
        <ListItem listStyle="✓">
          Precise and pleasant colors are generated and selected within the
          CIELAB color space
        </ListItem>
        <ListItem listStyle="✓">Punctuation marks are slightly dimmed</ListItem>
        <ListItem listStyle="✓">
          Left environment is less busy than in the default themes
        </ListItem>
        <ListItem listStyle="✓">Colors can be configured</ListItem>
      </List>
    </Section>
    <ScreenshotSection
      screenshots={screenshots}
      application="vscode"
      setPreset={props.setPreset}
    />
    <Section>
      <Heading level={2}>Get it</Heading>
      <Text>
        <CodeSection>{`git clone https://github.com/alexanderte/dainty-vscode.git
cd dainty-vscode
yarn
`}</CodeSection>
      </Text>
      <Heading level={3}>
        Install theme into your <Code>`settings.json`</Code>
      </Heading>
      <Text>
        <CodeSection>{`yarn build -i`}</CodeSection>
      </Text>
    </Section>
    <Section>
      <Heading level={2}>Configuration</Heading>
      <Text>
        Dainty can be configured by editing <Code>`configuration.jsonc`</Code>.
        The file is generated if it doesn’t exist while running{" "}
        <Code>`yarn build`</Code>. See{" "}
        <Anchor href="https://github.com/alexanderte/dainty-shared/blob/master/shared-configuration.md">
          Shared configuration
        </Anchor>{" "}
        for configuration shared by Dainty for different applications.
      </Text>
    </Section>
  </>
);

export default VSCode;

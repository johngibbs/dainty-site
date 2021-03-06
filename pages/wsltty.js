import Link from "next/link";
import { Code, CodeSection } from "../components/code";
import { Heading, Text, Anchor, Bold } from "../components/core";
import { List, ListItem } from "../components/lists";
import { Section, Subsection } from "../components/layout";
import { ScreenshotSection } from "../components/screenshots";
import { screenshots } from "../screenshots";

const WSLtty = props => (
  <>
    <Section>
      <Heading level={1}>Dainty for WSLtty/Mintty</Heading>
      <Text>
        Dainty is a <Bold>color theme generator</Bold> with support for{" "}
        <Bold>WSLtty/Mintty</Bold>. It comes with default presets{" "}
        <Bold>Dainty Dark</Bold> and <Bold>Dainty Light</Bold> as well as{" "}
        <Bold>popular color themes</Bold> as its presets.
      </Text>
    </Section>
    <ScreenshotSection
      screenshots={screenshots}
      application="wsltty"
      setPreset={props.setPreset}
    />
    {/* <Section>
      <Heading level={2}>Option 1 – Download</Heading>
      <Subsection>
        <Button>
          <Code>`dainty`</Code>
        </Button>
      </Subsection>
      <Subsection>
        <Heading level={3}>WSLtty – Install the theme</Heading>
        <List listStyle="–">
          <ListItem listStyle="–">
            Place it in{" "}
            <Code>
              `C:\Users\<i>Your username</i>
              \AppData\Local\wsltty\usr\share\mintty\themes`
            </Code>
          </ListItem>
          <ListItem listStyle="–">
            <Anchor href="#choose-the-theme">Choose the theme in WSLtty</Anchor>
          </ListItem>
        </List>
        <Heading level={3}>Mintty – Install the theme</Heading>
        <List listStyle="–">
          <ListItem listStyle="–">
            Place it in{" "}
            <Code>`C:\Program Files\Git\usr\share\mintty\themes`</Code>
          </ListItem>
          <ListItem listStyle="–">
            <Anchor href="#choose-the-theme">Choose the theme in Mintty</Anchor>
          </ListItem>
        </List>
      </Subsection>
    </Section> */}
    <Section>
      <Heading level={2}>Get it</Heading>
      <CodeSection>{`git clone https://github.com/alexanderte/dainty-wsltty.git
cd dainty-wsltty
yarn
`}</CodeSection>
      <Subsection>
        <Heading level={3}>WSLtty – Build and install the theme</Heading>
        <CodeSection>{`yarn build -i -p dainty-dark`}</CodeSection>
        Once installed,{" "}
        <Anchor href="#choose-the-theme">choose the theme in WSLtty</Anchor>.
      </Subsection>
      <Subsection>
        <Heading level={3}>Mintty – Build and install the theme</Heading>
        <CodeSection>{`yarn build -t mintty -i -p dainty-dark`}</CodeSection>
        To install the theme using <Code>`yarn build`</Code>, you need to run
        Git Bash as administrator. Mintty needs to be installed through Git for
        Windows using the default installation path. Once installed,{" "}
        <Anchor href="#choose-the-theme">choose the theme in Mintty</Anchor>.
      </Subsection>
    </Section>
    <Section>
      <Heading level={2}>
        <a name="choose-the-theme">Choose the theme in WSLtty/Mintty</a>
      </Heading>
      <List listStyle="–">
        <ListItem listStyle="–">Right-click in WSLtty</ListItem>
        <ListItem listStyle="–">Click «Options…»</ListItem>
        <ListItem listStyle="–">
          Select <Code>`dainty`</Code> from the list
        </ListItem>
        <ListItem listStyle="–">Click «Apply»</ListItem>
      </List>
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

export default WSLtty;

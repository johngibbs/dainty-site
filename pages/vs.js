import Link from "next/link";
import { Code, CodeSection } from "../components/code";
import { Heading, Text, Anchor, Bold, Shake } from "../components/core";
import { List, ListItem } from "../components/lists";
import { Section, Subsection } from "../components/layout";
import { ScreenshotSection } from "../components/screenshots";
import { screenshots } from "../screenshots";

const VS = props => (
  <>
    <Section>
      <Heading level={1}>Dainty for Visual Studio</Heading>
      <Text>
        Dainty is a <Bold>color theme generator</Bold> with support for{" "}
        <Bold>Visual Studio</Bold>. It comes with default presets{" "}
        <Bold>Dainty Dark</Bold> and <Bold>Dainty Light</Bold> as well as{" "}
        <Bold>popular color themes</Bold> as its presets.
      </Text>
    </Section>
    <Section>
      <Heading level={2}>Features</Heading>
      <List listStyle="✓">
        <ListItem listStyle="✓">
          Colors are processed, and can be adjusted, within the Lab color space
        </ListItem>
        <ListItem listStyle="✓">Punctuation marks are slightly dimmed</ListItem>
        <ListItem listStyle="✓">
          Left side of the editor is less busy than in the default themes
        </ListItem>
        <ListItem listStyle="✓">Contrast for scrollbars can be added</ListItem>
        <ListItem listStyle="✓">
          Transparent environment borders, scrollbar containers, and tool window
          grip handles can be set
        </ListItem>
        <ListItem listStyle="✓">
          Settings for Indent Guides extension can be included
        </ListItem>
        <ListItem listStyle="✓">Colors can be configured</ListItem>
      </List>
    </Section>
    <ScreenshotSection
      screenshots={screenshots}
      application="vs"
      setPreset={props.setPreset}
    />
    <Section>
      <Heading level={2}>Prerequisites</Heading>
      <List listStyle="–" noScrollContainer>
        <ListItem listStyle="–">Visual Studio 2017</ListItem>
        <ListItem listStyle="–" shake>
          <Anchor href="https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.VisualStudio2017ColorThemeEditor">
            Color Theme Editor
          </Anchor>
          &nbsp;extension
        </ListItem>
      </List>
    </Section>
    {/* <Section>
      <Heading level={2}>Option 1 – Download</Heading>
      <Subsection>
        <Button>
          <Code>`dainy-vs-latest.zip`</Code>
        </Button>
      </Subsection>
      <Subsection>
        Once downloaded, <Anchor href="#setup">set it up</Anchor>.
      </Subsection>
    </Section> */}
    <Section>
      <Heading level={2}>Get it</Heading>
      <CodeSection>{`git clone https://github.com/alexanderte/dainty-vs.git
cd dainty-vs
yarn
`}</CodeSection>
      <Subsection>
        <Heading level={3}>Build the theme</Heading>
        <CodeSection>{`yarn build -p dainty-dark`}</CodeSection>
      </Subsection>
      <Subsection>
        Once built, <Anchor href="#setup">set it up</Anchor>.
      </Subsection>
    </Section>
    <Section>
      <Heading level={2}>
        <a name="setup">Setup</a>
      </Heading>
      <List listStyle="–">
        <ListItem listStyle="–">
          Tools → Customize Colors → Import Theme
        </ListItem>
        <List listStyle="–" nested>
          <ListItem listStyle="–">
            Select <Code>`dainty.vstheme`</Code>
          </ListItem>
        </List>
        <ListItem listStyle="–">
          Tools → Import and Export Settings… → Import selected environment
          settings
        </ListItem>
        <List listStyle="–" nested>
          <ListItem listStyle="–">
            Select <Code>`dainty.vssettings`</Code>
          </ListItem>
        </List>
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
    <Section>
      <Heading level={2}>Additional extensions</Heading>
      <Text>
        These are some extensions that improve the aestetics of Visual Studio:
      </Text>
      <List listStyle="–">
        <ListItem listStyle="–">
          <Anchor href="https://marketplace.visualstudio.com/items?itemName=SteveDowerMSFT.IndentGuides">
            Indent Guides
          </Anchor>
        </ListItem>
        <ListItem listStyle="–">
          <Anchor href="https://marketplace.visualstudio.com/items?itemName=OmarRwemi.BetterComments">
            Better Comments
          </Anchor>
        </ListItem>
        <ListItem listStyle="–">Line Press</ListItem>
      </List>
      <Text>
        To make Indent Guides behave similar to Visual Studio Code, highlighting
        has to be set to “Current line”. Dainty can be configured to include
        settings for Indent Guides which both sets this option and all
        indentation colors.
      </Text>
      <Text>
        Better Comments has default settings that lead to uneven spacing. This
        can be fixed by setting Size Offset to <Code>0</Code> and Opacity to{" "}
        <Code>1</Code>. Tokens can be disabled by setting each value to a UUID.
      </Text>
      <Text>
        I currently do not recommend using Line Press as its line spacings can
        be unpredictable. If you are using WSL then you can use{" "}
        <Anchor href="https://github.com/source-foundry/font-line">
          <Code>font-line</Code>
        </Anchor>{" "}
        to modify the line spacing of fonts. For Fira Code, somewhere around 50%
        might work.
      </Text>
    </Section>
  </>
);

export default VS;

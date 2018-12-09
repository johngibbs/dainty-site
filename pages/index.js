import Link from "next/link";
import { Section, Subsection } from "../components/layout";
import { Heading, Anchor, Text, Bold } from "../components/core";
import { List, ListItem } from "../components/lists";

const Overview = () => (
  <>
    <Heading level={1}>Dainty – An overview</Heading>
    <Section>
      <Subsection>
        <Heading level={2}>Theme generator</Heading>
        <Text>
          <Bold>Dainty</Bold> is a color theme generator with some unique
          capabilities:
        </Text>
        <List listStyle="–">
          <ListItem listStyle="–">
            Colors are processed and can be defined within the{" "}
            <Bold>Lab color space</Bold>
          </ListItem>
          <ListItem listStyle="–">
            The environment for each application is styled for a{" "}
            <Bold>minimal yet usable look</Bold>
          </ListItem>
          <ListItem listStyle="–">
            With a <Bold>unified preset definition</Bold>, a color theme can be
            built for each supported application
          </ListItem>
          <ListItem listStyle="–">
            <Bold>Importing VS Code themes</Bold> into Dainty presets are
            supported
          </ListItem>
          <ListItem listStyle="–">
            Creating a preset requires <Bold>less effort</Bold> compared to
            theming an application the usual way
          </ListItem>
          <ListItem listStyle="–">
            Dainty for each application supports{" "}
            <Bold>configuration using JSON</Bold>
          </ListItem>
        </List>
      </Subsection>
      <Subsection>
        <Heading level={2}>Presets</Heading>
        <Text>
          <Bold>Dainty Light</Bold> and <Bold>Dainty Dark</Bold> are the default
          presets of Dainty. They’re balanced and refined color themes using
          carefully selected colors within the Lab color space. They are
          designed to <Bold>maximize readability</Bold> and{" "}
          <Bold>reduce eye strain</Bold>. Dainty also comes with{" "}
          <Bold>popular themes</Bold> as presets – such as Night Owl – or even
          things like the branding colors of Prettier.
        </Text>
        <Text>
          Try out different presets on the{" "}
          <Link href="/preview">
            <Anchor>
              <Bold>Preview</Bold>
            </Anchor>
          </Link>{" "}
          page.
        </Text>
      </Subsection>
    </Section>
  </>
);

export default Overview;

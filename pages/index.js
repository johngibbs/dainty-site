import {
  Heading,
  Text,
  Section,
  List,
  ListItem,
  Anchor,
  Bold
} from "../components/core";
import Link from "next/link";

const Overview = () => (
  <>
    <Heading level={1}>Dainty – An overview</Heading>
    <Section>
      <Heading level={2}>Theme generator</Heading>
      <Text>
        <Bold>Dainty</Bold> is a color theme generator with some unique
        capabilities:
      </Text>
      <List listStyle="–">
        <ListItem listStyle="–">
          Colors are processed and can be defined within the{" "}
          <Bold>CIELAB color space</Bold>
        </ListItem>
        <ListItem listStyle="–">
          With a <Bold>single preset definition</Bold>, a color theme can be
          built for each supported application
        </ListItem>
        <ListItem listStyle="–">
          Creating a preset requires <Bold>less effort</Bold> compared to
          theming an application the usual way
        </ListItem>
        <ListItem listStyle="–">
          The environment for each application is styled for a{" "}
          <Bold>minimal yet usable look</Bold>
        </ListItem>
        <ListItem listStyle="–">
          Dainty for each application supports{" "}
          <Bold>configuration using JSON</Bold>
        </ListItem>
      </List>
    </Section>
    <Section>
      <Heading level={2}>Presets</Heading>
      <Text>
        <Bold>Dainty Light</Bold> and <Bold>Dainty Dark</Bold> are the default
        presets of Dainty. They’re balanced and refined color themes using
        carefully selected colors within the CIELAB color space. They are
        designed to <Bold>maximize readability</Bold> and{" "}
        <Bold>reduce eye strain</Bold>. Dainty also comes with presets based on{" "}
        <Bold>popular themes</Bold> such as Night Owl, or even things like the
        branding colors of Prettier.
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
    </Section>
  </>
);

export default Overview;

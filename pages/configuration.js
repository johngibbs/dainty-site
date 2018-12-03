import {
  Heading,
  Text,
  Section,
  Anchor,
  Code,
  CodeSection,
  Subsection,
  Table,
  Tr,
  Th,
  Td,
  Small
} from "../components/core";

const Overview = () => (
  <>
    <Section>
      <Heading level={1}>Dainty – Configuration</Heading>
      <Text>
        Dainty has a unique configuration schema defined for each application.
        Properties such as <Code>`colors`</Code> and{" "}
        <Code>`customizations`</Code> are shared among all schemas. Dainty for
        each application supports configuration presets.
      </Text>
    </Section>
    <Section>
      <Heading level={2}>Build parameters</Heading>
      <Subsection>
        <Heading level={3}>
          <Code>-p</Code> or <Code>--preset</Code>
        </Heading>
        <Text>
          <Small>
            Presets are configuration files that can be used in addition to
            <Code>`configuration.jsonc`</Code>. They are intended for turning
            Dainty into another color theme. Presets are located in the{" "}
            <Code>`presets`</Code> directory of the shared repository and can be
            activated by adding <Code>`-p &lt;preset&gt;`</Code> or
            <Code>`--preset &lt;preset&gt;`</Code> to <Code>`yarn build`</Code>:
          </Small>
        </Text>
        <CodeSection>yarn build -p dainty-light</CodeSection>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>-i</Code> or <Code>--install</Code>
        </Heading>
        <Text>
          <Small>Installs Dainty if supported by generator.</Small>
        </Text>
        <CodeSection>yarn build -i</CodeSection>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>-d</Code> or <Code>--deactivate</Code>
        </Heading>
        <Text>
          <Small>Deactivates Dainty if supported by generator.</Small>
        </Text>
        <CodeSection>yarn build -d</CodeSection>
      </Subsection>
    </Section>
    <Section>
      <Heading level={2}>User configuration</Heading>
      <Text>
        <Small>
          If a property is set in both <Code>`configuration.jsonc`</Code> and
          the preset configuration, then the one in{" "}
          <Code>`configuration.jsonc`</Code> is used.
        </Small>
      </Text>

      <Heading level={3}>
        <Code>`preset`</Code> (<Code>`string`</Code>)
      </Heading>
      <Text>
        <Small>
          Preset to use if no preset is specified. Defaults to{" "}
          <Code>`dainty-dark`</Code>.
        </Small>
      </Text>
      <Heading level={3}>
        <Code>`colors._adjustments`</Code> (<Code>`object`</Code>)
      </Heading>
      <Table>
        <thead>
          <Tr>
            <Th>Property</Th>
            <Th>Type</Th>
            <Th>Description</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>
              <Code>`lightness`</Code>
            </Td>
            <Td>
              <Code>`number`</Code>
            </Td>
            <Td>Lightness to be added or subtracted</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>`lightnessStart`</Code>
            </Td>
            <Td>
              <Code>`number`</Code>
            </Td>
            <Td>Lightness to be added or subtracted at start of scale</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>`lightnessEnd`</Code>
            </Td>
            <Td>
              <Code>`number`</Code>
            </Td>
            <Td>Lightness to be added or subtracted at end of scale</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>`chroma`</Code>
            </Td>
            <Td>
              <Code>`number`</Code>
            </Td>
            <Td>Chroma to be added or subtracted</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>`chromaStart`</Code>
            </Td>
            <Td>
              <Code>`number`</Code>
            </Td>
            <Td>Chroma to be added or subtracted at start of scale</Td>
          </Tr>
          <Tr>
            <Td>
              <Code>`chromaEnd`</Code>
            </Td>
            <Td>
              <Code>`number`</Code>
            </Td>
            <Td>Chroma to be added or subtracted at end of scale</Td>
          </Tr>
        </tbody>
      </Table>
    </Section>
    <Section>
      <Heading level={2}>Preset configuration</Heading>
      <Text>
        <Small>
          The following properties are intended to be set only by presets.
        </Small>
      </Text>
      <Subsection>
        <Heading level={3}>
          <Code>`type`</Code> (<Code>string</Code>)
        </Heading>
        <Text>
          <Small>
            Type of preset. Can either be <Code>`dark`</Code> or{" "}
            <Code>`light`</Code>.
          </Small>
        </Text>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>`name`</Code> (<Code>string</Code>)
        </Heading>
        <Text>
          <Small>Name of the preset</Small>.
        </Text>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>`description`</Code> (<Code>string</Code>)
        </Heading>
        <Text>
          <Small>Description of the preset.</Small>
        </Text>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>`colors._all`</Code>
        </Heading>
        <Table>
          <thead>
            <Tr>
              <Th>Property</Th>
              <Th>Type</Th>
              <Th>Description</Th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>
                <Code>`lightness`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Lightness to be added or subtracted</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`lightnessStart`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Lightness to be added or subtracted at start of scale</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`lightnessEnd`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Lightness to be added or subtracted at end of scale</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`chroma`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Chroma to be added or subtracted</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`chromaStart`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Chroma to be added or subtracted at start of scale</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`chromaEnd`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Chroma to be added or subtracted at end of scale</Td>
            </Tr>
          </tbody>
        </Table>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>
            `colors.<i>name-of-color</i>`
          </Code>{" "}
          (<Code>object</Code>)
        </Heading>
        <Text>
          With a provided base color a scale of 41 shades is built. When color
          is expressed as hex as opposed to hue and chroma, the color will be
          converted to LCh and its hue and chroma are used while the lightness
          is calculated. See{" "}
          <Anchor href="https://github.com/alexanderte/dainty-shared/blob/master/presets/dainty-dark.jsonc">
            <Code>`dainty-dark.jsonc`</Code>
          </Anchor>{" "}
          for all available colors.
        </Text>
        <Table>
          <thead>
            <Tr>
              <Th>Property</Th>
              <Th>Type</Th>
              <Th>Description</Th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>
                <Code>`hex`</Code>
              </Td>
              <Td>
                <Code>`string`</Code>
              </Td>
              <Td>Color as hex</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`lightness`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Lightness to be added or subtracted</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`lightnessStart`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Lightness to be added or subtracted at start of scale</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`lightnessEnd`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Lightness to be added or subtracted at end of scale</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`chroma`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Chroma to be added or subtracted</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`chromaStart`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Chroma to be added or subtracted at start of scale</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`chromaEnd`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Chroma to be added or subtracted at end of scale</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`hue`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Hue as CIELAB hue in range 0–360</Td>
            </Tr>
          </tbody>
        </Table>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>
            `customizations.terminal.<i>name-of-property</i>`
          </Code>{" "}
          (<Code>object</Code>)
        </Heading>
        <Text>
          <Small>
            See{" "}
            <Anchor href="https://github.com/alexanderte/dainty-shared/blob/master/presets/dainty-dark.jsonc">
              <Code>`dainty-dark.jsonc`</Code>
            </Anchor>{" "}
            for all available properties. Value can be either a Dainty color
            constant or a hex color value.
          </Small>
        </Text>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>
            `customizations.tokens.<i>name-of-token</i>`
          </Code>{" "}
          (<Code>object</Code>)
        </Heading>
        <Text>
          <Small>
            See{" "}
            <Anchor href="https://github.com/alexanderte/dainty-shared/blob/master/presets/dainty-dark.jsonc">
              <Code>`dainty-dark.jsonc`</Code>
            </Anchor>{" "}
            for all available properties. Value can be either a Dainty color
            constant or a hex color value.
          </Small>
        </Text>
      </Subsection>
    </Section>
  </>
);

export default Overview;

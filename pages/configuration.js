import { Section, Subsection } from "../components/layout";
import { Heading, Anchor, Text } from "../components/core";
import { Code, CodeSection } from "../components/code";
import { Table, Tr, Th, Td } from "../components/tables";

const Overview = () => (
  <>
    <Section>
      <Heading level={1}>Dainty – Configuration</Heading>
      <Text>
        Dainty has extensive configuration capabilities. A unique configuration
        schema defined for each application. Properties such as{" "}
        <Code>`colors`</Code> and <Code>`customizations`</Code> are shared among
        all schemas. Also, Dainty for each application supports configuration
        presets, intended for defining color themes.
      </Text>
    </Section>
    <Section>
      <Subsection>
        <Heading level={2}>Build parameters</Heading>
        <Text small>
          This section describes the parameters that can be passed to{" "}
          <Code>`yarn build`</Code>.
        </Text>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>-p</Code> <Code token="punctuation">&nbsp;|&nbsp;</Code>{" "}
          <Code>--preset</Code>
        </Heading>
        <Text small>
          Presets are configuration files that can be used in addition to
          <Code>`configuration.jsonc`</Code>. Presets are located in the{" "}
          <Code>`presets`</Code> directory of the shared repository and can be
          activated by using <Code>`-p &lt;preset&gt;`</Code> or
          <Code>`--preset &lt;preset&gt;`</Code>:
        </Text>
        <CodeSection>yarn build -p dainty-light</CodeSection>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>-i</Code> <Code token="punctuation">&nbsp;|&nbsp;</Code>{" "}
          <Code>--install</Code>
        </Heading>
        <Text small>Installs Dainty if supported by generator.</Text>
        <CodeSection>yarn build -i</CodeSection>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>-d</Code> <Code token="punctuation">&nbsp;|&nbsp;</Code>{" "}
          <Code>--deactivate</Code>
        </Heading>
        <Text small>Deactivates Dainty if supported by generator.</Text>
        <CodeSection>yarn build -d</CodeSection>
      </Subsection>
    </Section>
    <Section>
      <Heading level={2}>User configuration</Heading>
      <Subsection>
        <Text small>
          If a property is set in both <Code>`configuration.jsonc`</Code> and
          the preset configuration, then the one in{" "}
          <Code>`configuration.jsonc`</Code> is used.
        </Text>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>`preset`</Code> (<Code>`string`</Code>)
        </Heading>
        <Text small>
          Preset to use if no preset is specified. Defaults to{" "}
          <Code>`dainty-dark`</Code>.
        </Text>
      </Subsection>
      <Subsection>
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
              <Td>Lightness to be added or subtracted at start of scales</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`lightnessEnd`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Lightness to be added or subtracted at end of scales</Td>
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
              <Td>Chroma to be added or subtracted at start of scales</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`chromaEnd`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Chroma to be added or subtracted at end of scales</Td>
            </Tr>
          </tbody>
        </Table>
      </Subsection>
    </Section>
    <Section>
      <Subsection>
        <Heading level={2}>Preset configuration</Heading>
        <Text small>
          The following properties are intended to be set only by presets.
        </Text>
        <Heading level={3}>
          <Code>`type`</Code> (<Code>string</Code>)
        </Heading>
        <Text small>
          Type of preset. Can either be <Code>`dark`</Code> or{" "}
          <Code>`light`</Code>.
        </Text>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>`name`</Code> (<Code>string</Code>)
        </Heading>
        <Text small>Name of the preset.</Text>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>`description`</Code> (<Code>string</Code>)
        </Heading>
        <Text small>Description of the preset.</Text>
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
              <Td>Lightness to be added or subtracted at start of scales</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`lightnessEnd`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Lightness to be added or subtracted at end of scales</Td>
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
              <Td>Chroma to be added or subtracted at start of scales</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>`chromaEnd`</Code>
              </Td>
              <Td>
                <Code>`number`</Code>
              </Td>
              <Td>Chroma to be added or subtracted at end of scales</Td>
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
        <Text small>
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
              <Td>Hue in range 0–360</Td>
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
        <Text small>
          See{" "}
          <Anchor href="https://github.com/alexanderte/dainty-shared/blob/master/presets/dainty-dark.jsonc">
            <Code>`dainty-dark.jsonc`</Code>
          </Anchor>{" "}
          for all available properties. Value can be either a Dainty color
          constant or a hex color value.
        </Text>
      </Subsection>
      <Subsection>
        <Heading level={3}>
          <Code>
            `customizations.tokens.<i>name-of-token</i>`
          </Code>{" "}
          (<Code>object</Code>)
        </Heading>
        <Text small>
          See{" "}
          <Anchor href="https://github.com/alexanderte/dainty-shared/blob/master/presets/dainty-dark.jsonc">
            <Code>`dainty-dark.jsonc`</Code>
          </Anchor>{" "}
          for all available properties. Value can be either a Dainty color
          constant or a hex color value.
        </Text>
      </Subsection>
    </Section>
  </>
);

export default Overview;

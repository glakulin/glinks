import Link from "next/link";
import localFont from "next/font/local";
import { Flex, Box, Icon, Text } from "..";
import { CardLink_Props } from ".";

const w95 = localFont({ src: "../../fonts/w95f.woff2", display: "swap" });

// Bevels
const RAISED = "inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf";
const SUNKEN = "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080";

function Title_Button({ kind }: { kind: "min" | "max" | "close" }) {
  return (
    <Flex align_items="center" justify_content="center"
      css={{
        position: "relative",
        width: 16, height: 14, flexShrink: 0,
        backgroundColor: "var(--face)",
        boxShadow: RAISED,
        "&:hover": { boxShadow: SUNKEN },
      }}
    >
      {kind === "min" && <Box css={{ position: "absolute", left: 3, bottom: 3, width: 6, height: 2, backgroundColor: "#0a0a0a" }} />}
      {kind === "max" && <Box css={{ position: "absolute", left: 3, top: 3, width: 9, height: 8, border: "1px solid #0a0a0a", borderTop: "2px solid #0a0a0a" }} />}
      {kind === "close" && (
        <Box css={{
          position: "absolute", left: 3, top: 2, width: 2, height: 2, backgroundColor: "#0a0a0a",
          boxShadow: "4px 0 #0a0a0a, 2px 2px #0a0a0a, 6px 2px #0a0a0a, 4px 4px #0a0a0a, 2px 6px #0a0a0a, 6px 6px #0a0a0a, 0 8px #0a0a0a, 8px 8px #0a0a0a",
        }} />
      )}
    </Flex>
  );
}

// Component
export function CardLinkWin95({ children, css, icon, href, ...rest }: CardLink_Props) {
  return (<>
    <Flex {...rest}
      tag={Link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      direction="column"
      className="transition"
      padding={3}
      css={{
        "--face": "#c0c0c0",
        "--bar": "#808080",        
        "--bar_text": "#dfdfdf",

        cursor: "pointer",
        fontFamily: w95.style.fontFamily,
        backgroundColor: "var(--face)",
        boxShadow: RAISED,

        "&:hover": {
          "--bar": "linear-gradient(90deg, #000080, #1084d0)", 
          "--bar_text": "#ffffff",
        },
        "&:hover .client i": { outline: "1px dotted #0a0a0a" }, 
        "&:focus-visible": { outline: "1px dotted #0a0a0a", outlineOffset: -4 },
        "&:active": { boxShadow: SUNKEN },
        ...css,
      }}
    >
      <Flex align_items="center" gap={4}
        css={{
          background: "var(--bar)",
          color: "var(--bar_text)",
          padding: "2px 2px 2px 3px",
          fontSize: 12, fontWeight: 700, lineHeight: "16px",
          whiteSpace: "nowrap",
        }}
      >
        <Icon name={icon} size={16} css={{ flexShrink: 0, color: "var(--bar_text)" }} />
        <Box css={{ overflow: "hidden", textOverflow: "ellipsis", flexGrow: 1 }}>Internet Shortcut</Box>
        <Flex gap={2}>
          <Title_Button kind="min" />
          <Title_Button kind="max" />
          <Title_Button kind="close" />
        </Flex>
      </Flex>

      <Flex className="client" align_items="center" gap={12} css={{ padding: "10px 8px 8px", flexGrow: 1 }}>
        <Icon name={icon} size={48} css={{ flexShrink: 0, color: "#0a0a0a" }} />

        <Flex direction="column" gap={8} css={{ flexGrow: 1, minWidth: 0 }}>
          <Text className="card_title transition" size="heading_default" css={{ color: "#0a0a0a" }}>{children}</Text>

          <Flex align_items="center" gap={6}>
            <Text size="body_xs" css={{ color: "#0a0a0a", flexShrink: 0 }}>Address:</Text>
            <Flex align_items="center"
              css={{ flexGrow: 1, minWidth: 0, backgroundColor: "#ffffff", boxShadow: SUNKEN, padding: "2px 2px 2px 4px" }}
            >
              <Text size="body_xs" css={{ color: "#0a0a0a", flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {href}
              </Text>
              <Flex align_items="center" justify_content="center"
                css={{ width: 16, height: 14, flexShrink: 0, backgroundColor: "var(--face)", boxShadow: RAISED }}>
                <Box css={{ fontSize: 8, lineHeight: 1, color: "#0a0a0a" }}>▼</Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </>)
}
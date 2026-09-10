import Link from "next/link";
import localFont from "next/font/local";
import { Flex, Icon, Text } from "..";
import { CardLink_Props, strip_href } from ".";

const minecraft = localFont({ src: "../../fonts/MinecraftTen.ttf", display: "swap" });
const monocraft = localFont({ src: "../../fonts/Monocraft.ttf", display: "swap" });

const button_border = (light: string, dark: string, outline: string) => `
  0 0 0 2px ${outline},
  inset 0 2px 0 0 ${light},
  inset 2px 0 0 0 ${light},
  inset 0 -2px 0 0 ${dark},
  inset -2px 0 0 0 ${dark}
`;

// Component
export function CardLinkMinecraft({
  children, css, icon, href, ...rest
}: CardLink_Props) {
  return (<>
    <style>{`
      @keyframes mc_press { 0% { transform: translateY(0) } 50% { transform: translateY(2px) } 100% { transform: translateY(0) } }
    `}</style>

    <Flex {...rest}
      tag={Link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      align_items="center"
      justify_content="center"
      gap={12}
      className="transition"
      padding={12}
      css={{
        "--fill":    "#6b6b6b",
        "--fill_hover": "#828282",
        "--light":   "#ababab",
        "--dark":    "#2b2b2b",
        "--outline": "#202020",
        "--text":    "#e0e0e0",
        "--text_hover": "#ffffa0",
        "--text_shadow": "#2b2b2b",

        position: "relative",
        cursor: "pointer",
        color: "var(--text)",
        fontFamily: minecraft.style.fontFamily,
        backgroundColor: "var(--fill)",
        boxShadow: button_border("var(--light)", "var(--dark)", "var(--outline)"),

        "&:hover": {
          backgroundColor: "var(--fill_hover)",
          color: "var(--text_hover)",
        },
        "&:active": { animation: "mc_press .08s steps(1, end) 1" },
        ...css,
      }}
    >
      <Icon name={icon} size={64} css={{ color: "inherit", filter: "drop-shadow(1px 1px 0 var(--text_shadow))" }} />

      <Flex direction="column" gap={12}>
        <Text
          className="card_title transition"
          size="heading_default"
          css={{
            fontFamily: minecraft.style.fontFamily,
            color: "inherit",
            textShadow: "2px 2px 0 var(--text_shadow)",
            letterSpacing: 1,
          }}
        >
          {children}
        </Text>
        <Text
          size="body_xs"
          css={{ fontFamily: monocraft.style.fontFamily, color: "rgba(255,255,255,.5)", letterSpacing: 0 }}
        >
          {strip_href(href)}
        </Text>
      </Flex>
    </Flex>
  </>)
}
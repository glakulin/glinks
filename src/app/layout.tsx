import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { get_color, get_screen_padding } from "@/ui/tokens";
import { Flex, Logo_Full, Text } from "@/components";
import Link from "next/link";
import { CSS_Object } from "@/ui/css";

const font_body = IBM_Plex_Sans({
  subsets: ["cyrillic-ext", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-body"
});

const font_mono = IBM_Plex_Mono({
  subsets: ["cyrillic-ext", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-mono"
}); 

const font_heading = IBM_Plex_Serif({
  subsets: ["cyrillic-ext", "latin-ext"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-heading"
}); 

export const metadata: Metadata = {
  title: "glinks",
  description: "glakulin links",
};

let link_style: CSS_Object = {
  cursor: "pointer",
  "&:hover": {
    color: get_color("accent_5")
  }
}

function LinkStyle({text, href}: {text?: string, href?: string}) {
  return (<Text tag={Link} css={{...link_style}} className="transition" href={href || "/"}>{text}</Text>)
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${font_body.variable} ${font_heading.variable} ${font_mono.variable}`}
        style={{
          backgroundColor: get_color("gray_9"),
          color: get_color("gray_1")
        }}
      >
        <Flex tag="main"
          css={{
            ...get_screen_padding()
          }}
        >
          <Flex
            direction="column"
            align_items="center"
            padding={[32, 0]}
            css={{width: "100%"}}
            gap={40}
          >
            <Logo_Full />
            <Flex gap={20}>
              <LinkStyle href="/" text="Default" />
              <LinkStyle href="/isaac" text="TBOI" />
              <LinkStyle href="/minecraft" text="Minecraft" />
              <LinkStyle href="/win95" text="Win95" />
            </Flex>
            <Flex
              css={{width: "100%", maxWidth: 768}}
              direction="column"
              gap={32}
            >{children}</Flex>
          </Flex>
        </Flex>
      </body>
    </html>
  );
}

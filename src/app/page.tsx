// app/page.tsx
import type { ComponentType } from "react";
import Link from "next/link";
import {
  Flex,
  Logo_Full,
  Text,
  CardLink,
  CardLinkIsaac,
  CardLinkMinecraft,
  CardLinkWin95,
} from "@/components";
import {
  LinksPage,
  type Card_Link_Props,
} from "@/components/LinksPage";
import { get_color } from "@/ui/tokens";
import type { CSS_Object } from "@/ui/css";

const STYLE_VARIANTS = [
  { value: "default", name: "Default" },
  { value: "tboi", name: "TBOI" },
  { value: "minecraft", name: "Minecraft" },
  { value: "win95", name: "Win95" },
] as const;

type Style_Variant = (typeof STYLE_VARIANTS)[number]["value"];

const CARDS = {
  default: CardLink,
  tboi: CardLinkIsaac,
  minecraft: CardLinkMinecraft,
  win95: CardLinkWin95,
} satisfies Record<Style_Variant, ComponentType<Card_Link_Props>>;

function is_style_variant(value: string | undefined): value is Style_Variant {
  return STYLE_VARIANTS.some((item) => item.value === value);
}

const link_style: CSS_Object = {
  cursor: "pointer",
  "&:hover": {
    color: get_color("accent_5"),
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ style?: string | string[] }>;
}) {
  const { style } = await searchParams;

  const raw_style = Array.isArray(style) ? style[0] : style;
  const active: Style_Variant = is_style_variant(raw_style)
    ? raw_style
    : "default";

  const Card = CARDS[active];

  return (
    <Flex
      direction="column"
      align_items="center"
      padding={[32, 0]}
      css={{ width: "100%" }}
      gap={40}
    >
      <Logo_Full />

      <Flex gap={20}>
        {STYLE_VARIANTS.map((item) => {
          const is_active = item.value === active;

          return (
            <Text
              key={item.value}
              tag={Link}
              href={`/?style=${item.value}`}
              className="transition"
              css={{
                ...link_style,
                ...(is_active ? { color: get_color("accent_5") } : {}),
              }}
              aria-current={is_active ? "page" : undefined}
            >
              {item.name}
            </Text>
          );
        })}
      </Flex>

      <Flex
        css={{ width: "100%", maxWidth: 768 }}
        direction="column"
        gap={32}
      >
        <LinksPage Card={Card} />
      </Flex>
    </Flex>
  );
}
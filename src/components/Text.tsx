import type { ReactNode } from "react";
import { get_color, type Colors_Name } from "@/ui/tokens";
import { FONT_VARIABLE, type Fonts_Name, get_font } from "@/ui/tokens";
import { Box, type CSS_Object } from "./Box";


// Types
type Text_Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface Text_Props {
  size?: Fonts_Name;
  mono?: boolean;
  color?: Colors_Name;
  tag?: Text_Tag;
  css?: CSS_Object;
  children: ReactNode;
}


// Component
export function Text({ size = "body_default", mono = false, color, tag: Tag = "span", children, css: extra_css }: Text_Props) {
  let font = get_font(size);
  let base_style = {
    fontFamily: mono ? FONT_VARIABLE.mono : FONT_VARIABLE[font.family],
    fontSize: font.size,
    fontWeight: font.weight,
    color: color ? get_color(color) : undefined
  };
  let combined_css = { ...base_style, ...extra_css };

  return (
    <Box tag={Tag} css={combined_css}>
      {children}
    </Box>
  );
}

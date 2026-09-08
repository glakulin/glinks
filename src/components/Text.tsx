import type { ReactNode } from "react";
import { get_color, get_font, FONT_VARIABLE, type Colors_Name, type Fonts_Name } from "@/ui/tokens";


// Types
type Text_Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface Text_Props {
  size?: Fonts_Name;
  mono?: boolean;
  color?: Colors_Name;
  tag?: Text_Tag;
  children: ReactNode;
}


// Component
export function Text({ 
  size = "body_default", 
  mono = false, 
  color, 
  tag: Tag = "span", 
  children 
}: Text_Props) {
  let font = get_font(size);
  return (
    <Tag style={{
      fontFamily: mono ? FONT_VARIABLE.mono : FONT_VARIABLE[font.family],
      fontSize: font.size,
      fontWeight: font.weight,
      color: color ? get_color(color) : undefined
    }}>{children}</Tag>
  );
}

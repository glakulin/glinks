import type { ReactNode } from "react";
import { get_color, get_font, FONT_VARIABLE, type Colors_Name, type Font_Family, type Font_Size_Name } from "@/ui/tokens";


// Types
interface Text_Props {
  family?: Font_Family;
  size?: Font_Size_Name;
  color?: Colors_Name;
  children: ReactNode;
}


// Component
export function Text({ family = "body", size = "default", color, children }: Text_Props) {
  let font = get_font(`${family}_${size}`);
  return (
    <span style={{
      fontFamily: FONT_VARIABLE[family],
      fontSize: font.size,
      fontWeight: font.weight,
      color: color ? get_color(color) : undefined
    }}>{children}</span>
  );
}

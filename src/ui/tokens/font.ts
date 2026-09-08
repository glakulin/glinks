// Types
type Font_Value = { size: number; weight: number };
type Font = Record<Font_Size_Name, Font_Value>;
export type Font_Family = "body" | "heading" | "mono"; // export type
export type Font_Size_Name = "default" | "xs" | "sm" | "md" | "lg" | "xl"; // export type
export type Fonts_Name = `${Font_Family}_${Font_Size_Name}`; // export type

type Fonts = Record<Font_Family, Font>;
type Font_Variable = `var(--font-${Font_Family})`;
type Font_Variables = Record<Font_Family, Font_Variable>;


// Object
export const FONT: Fonts = {
  body: {
    default: { size: 12, weight: 400 },
    xs: { size: 16, weight: 400 },
    sm: { size: 20, weight: 500 },
    md: { size: 28, weight: 500 },
    lg: { size: 32, weight: 600 },
    xl: { size: 36, weight: 600 }
  },
  heading: {
    default: { size: 40, weight: 500 },
    xs: { size: 44, weight: 500 },
    sm: { size: 48, weight: 600 },
    md: { size: 56, weight: 600 },
    lg: { size: 60, weight: 700 },
    xl: { size: 64, weight: 700 }
  },
  mono: { // no size/weight in Figma — uses body scale
    default: { size: 12, weight: 400 },
    xs: { size: 16, weight: 400 },
    sm: { size: 20, weight: 500 },
    md: { size: 28, weight: 500 },
    lg: { size: 32, weight: 600 },
    xl: { size: 36, weight: 600 }
  }
} as const satisfies Fonts;

export const FONT_VARIABLE: Font_Variables = {
  body: "var(--font-body)",
  heading: "var(--font-heading)",
  mono: "var(--font-mono)"
} as const satisfies Font_Variables;


// Function
export function get_font(fonts_name: Fonts_Name): Font_Value {
  let [font_family, font_size_name] = fonts_name.split("_");
  return FONT[font_family as Font_Family][font_size_name as Font_Size_Name];
}

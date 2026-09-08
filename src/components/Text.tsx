import { get_color, type Colors_Name, FONT_VARIABLE, type Fonts_Name, get_font } from "@/ui/tokens";
import { Default_Props, Box } from ".";

// Interface
interface Text_Props extends Default_Props {
  size?: Fonts_Name;
  mono?: boolean;
  color?: Colors_Name;
}


// Component
export function Text({ 
  size = "body_default", 
  mono = false, color, 
  children,
  tag, 
  css: css_object,
  ...rest
}: Text_Props) {
  let font = get_font(size);

  return (
    <Box tag={tag}
      css={{
        fontFamily: mono ? FONT_VARIABLE.mono : FONT_VARIABLE[font.family],
        fontSize: font.size,
        fontWeight: font.weight,
        color: color ? get_color(color) : undefined,
        ...css_object
      }} {...rest}>
      {children}
    </Box>
  );
}

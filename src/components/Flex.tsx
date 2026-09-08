import { CSSProperties } from "react";
import { Default_Props, Box} from ".";
import { Rem_Map } from "@/ui/tokens";

// Interface
interface Flex_Props extends Default_Props {
  inline?: boolean;
  direction?: CSSProperties["flexDirection"];
  wrap?: CSSProperties["flexWrap"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  padding?: Rem_Map;
  gap?: Rem_Map;
}

// Component
export function Flex({
  children,
  tag,
  css: css_object,
  inline = false,
  direction = "row",
  wrap = "nowrap",
  align,
  justify,
  padding,
  gap,
  ...rest
}: Flex_Props) {
  return (
    <Box
      tag={tag}
      {...rest}
      css={{
        display: inline ? "inline-flex" : "flex",
        flexDirection: direction,
        flexWrap: wrap,
        alignItems: align,
        justifyContent: justify,
        padding: padding,
        gap: gap,
        ...css_object,
      }}
    >
      {children}
    </Box>
  );
}
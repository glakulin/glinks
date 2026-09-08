import { CSSProperties } from "react";
import { Default_Props, Box } from ".";
import { Rem_Map } from "@/ui/tokens";

// Interface
interface Grid_Props extends Default_Props {
  inline?: boolean;

  padding?: Rem_Map;
  gap?: Rem_Map;
  radius?: Rem_Map;

  align_items?: CSSProperties["alignItems"];
  align_content?: CSSProperties["alignContent"];
  justify_items?: CSSProperties["justifyItems"];
  justify_content?: CSSProperties["justifyContent"];

  templateColumns?: CSSProperties["gridTemplateColumns"];
  templateRows?: CSSProperties["gridTemplateRows"];
  templateAreas?: CSSProperties["gridTemplateAreas"];
  autoFlow?: CSSProperties["gridAutoFlow"];
  placeItems?: CSSProperties["placeItems"];
  placeContent?: CSSProperties["placeContent"];
}

// Component
export function Grid({
  children,
  tag,
  css: css_object,
  
  inline = false,

  padding,
  gap,
  radius,

  align_items,
  align_content,
  justify_items,
  justify_content,

  templateColumns,
  templateRows,
  templateAreas,
  autoFlow,
  placeItems,
  placeContent,
  
  ...rest
}: Grid_Props) {
  return (
    <Box
      tag={tag}
      {...rest}
      css={{
        display: inline ? "inline-grid" : "grid",

        padding: padding,
        gap: gap,
        borderRadius: radius,

        alignItems: align_items,
        alignContent: align_content,
        justifyItems: justify_items,
        justifyContent: justify_content,

        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridTemplateAreas: templateAreas,
        gridAutoFlow: autoFlow,
        placeItems: placeItems,
        placeContent: placeContent,
        
        ...css_object,
      }}
    >
      {children}
    </Box>
  );
}
import { type CSS_Object } from "@/ui/css";

export { Logo_Full } from "./Logo_Full";
export { Icon, type Icon_Name } from "./Icon";
export { Text } from "./Text";
export { Box } from "./Box";
export { Flex } from "./Flex";
export { Grid } from "./Grid";

export interface Default_Props {
  css?: CSS_Object;
  children?: React.ReactNode;
  tag?: keyof React.JSX.IntrinsicElements;
}
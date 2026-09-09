import { type CSS_Object } from "@/ui/css";
import { ComponentPropsWithoutRef, ElementType } from "react";

export { Logo_Full } from "./Logo_Full";
export { Icon, type Icon_Name } from "./Icon";
export { Text } from "./Text";
export { Box } from "./Box";
export { Flex } from "./Flex";
export { Grid } from "./Grid";

export type Default_Props<T extends ElementType = "div"> = {
  css?: CSS_Object;
  children?: React.ReactNode;
  tag?: T;
} & ComponentPropsWithoutRef<T>;
import { css, get_css, get_hash, type CSS_Object } from "@/ui/css";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import React from "react";

// Types
type Box_Props<T extends ElementType = "div"> = {
  tag?: T;
  css?: CSS_Object;
} & ComponentPropsWithoutRef<T>;


// Component
export function Box<T extends ElementType = "div">({
  tag = "div" as T,
  css: css_object,
  ...rest
}: Box_Props<T>) {
  if (css_object === undefined) {
    return React.createElement(tag as any, rest as any);
  }

  let class_name = css(css_object);
  let css_text = get_css();

  return (
    <>
      {css_text ? <style href={`#${get_hash(css_text)}`} precedence="atomic">{css_text}</style> : null}
      {React.createElement(tag as any, {
        ...(rest as any),
        className: `${class_name} ${rest.className? rest.className : ""}` || undefined,
      })}
    </>
  );
}
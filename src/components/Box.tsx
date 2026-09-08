import { css, get_css, get_hash, type CSS_Object } from "@/ui/css";
import type { ComponentPropsWithoutRef, JSX } from "react";
import React from "react";


// Types
type Box_Props<T extends keyof JSX.IntrinsicElements = "div"> = {
  tag?: T;
  css?: CSS_Object;
} & Omit<ComponentPropsWithoutRef<T>, "css" | "tag">;


// Component
// Polymorphic: passes every attribute of the chosen tag through, plus atomic css
export function Box<T extends keyof JSX.IntrinsicElements = "div">({
  tag = "div" as T,
  css: css_object,
  ...rest
}: Box_Props<T>) {
  if (css_object === undefined) {
    return React.createElement(tag, rest);
  }

  let class_name = css(css_object);
  let css_text = get_css();

  return (
    <>
      {css_text ? <style href={`#${get_hash(css_text)}`} precedence="atomic">{css_text}</style> : null}
      {React.createElement(tag, { className: class_name || undefined, ...rest })}
    </>
  );
}
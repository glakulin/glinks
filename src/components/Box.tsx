import type { ElementType, ReactNode } from "react";
import { css, get_css, get_hash, type CSS_Object } from "@/ui/css";


// Types
interface Box_Props {
  tag?: string;
  css?: CSS_Object;
  children?: ReactNode;
}


// Component
export function Box({ tag = "div", css: css_object, children }: Box_Props) {
  let Tag = tag as ElementType;

  if (css_object === undefined) {
    return (<Tag>{children}</Tag>);
  }

  let class_name = css(css_object);
  let css_text = get_css();

  return (<>
    {css_text ? <style href={`#${get_hash(css_text)}`} precedence="atomic">{css_text}</style> : null}
    <Tag className={class_name || undefined}>{children}</Tag>
  </>);
}

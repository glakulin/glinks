// Atomic CSS engine: each "property: value" pair becomes a single class.
// Identical pairs share one class, so no rule is ever generated or rendered twice.
// Nesting: "&…" keys add pseudo selectors ("&:hover"), "@…" keys stack at-rules ("@media …").
// Values: every number / number array is auto-converted to rem (unitless properties stay raw).

import { cache } from "react";
import type { CSSProperties } from "react";
import { get_rem, map_rem, type Rem_Map } from "@/ui/tokens";

// Types
type CSS_Value = Rem_Map | string | undefined; // undefined skips the property; number | number[] → rem
type CSS_Nested = { [key: `&${string}` | `@${string}`]: CSS_Object }; // "&" = the element itself
export type CSS_Object = {
  [key in keyof CSSProperties]: CSSProperties[key] | CSS_Value; // every property also accepts number | number[]
} & { [key: `--${string}`]: CSS_Value } & CSS_Nested; // export type

// class_map — rule key (at-rule + selector + declaration) → class (dedupe cache); css_buffer — rules not yet rendered by Box
type CSS_Store = { class_map: Map<string, string>; css_buffer: string[] };


// Numbers become rem, except these CSS-unitless properties
const CSS_UNITLESS = new Set([
  "animationIterationCount", "aspectRatio", "borderImageOutset", "borderImageSlice", "borderImageWidth",
  "columnCount", "columns", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder",
  "gridArea", "gridRow", "gridRowEnd", "gridRowSpan", "gridRowStart", "gridColumn", "gridColumnEnd", "gridColumnSpan", "gridColumnStart",
  "fontWeight", "lineClamp", "lineHeight", "opacity", "order", "orphans", "scale", "tabSize", "widows", "zoom",
  "zIndex", "fillOpacity", "floodOpacity", "stopOpacity", "strokeDasharray", "strokeDashoffset", "strokeMiterlimit", "strokeOpacity", "strokeWidth"
]);


// Function
// One store per request: within a request all calls share it (declarations deduplicate),
// the next request gets a fresh store, so every page renders its own full CSS
const get_store = cache((): CSS_Store => ({ class_map: new Map(), css_buffer: [] }));


// djb2 — fast string hash; base36 keeps names short
export function get_hash(text: string): string {
  let hash = 5381;
  for (let i = 0; i < text.length; i++) {
    hash = ((hash * 33) ^ text.charCodeAt(i)) >>> 0;
  }
  return hash.toString(36);
}

// Converts a css object into atomic class names; new declarations are buffered as CSS rules
export function css(css_object: CSS_Object): string {
  let store = get_store();
  let classes: string[] = [];
  emit_css(store, css_object, "", "", classes);
  return classes.join(" ");
}

// Walks the object recursively:
// "&…" keys extend the selector (inner "&" resolves to the outer selector, like Sass),
// "@…" keys stack at-rule wrappers ("@media …", "@supports …", "@container …"),
// everything else is a declaration and becomes one atomic class
function emit_css(store: CSS_Store, css_object: CSS_Object, selector: string, at_rule: string, classes: string[]) {
  for (let [key, value] of Object.entries(css_object)) {
    // Array.isArray first: typeof [] === "object", so arrays must not fall into the nesting branch
    if (!Array.isArray(value) && typeof value === "object") { // nested block
      if (key.startsWith("@")) { // keep the selector, wrap everything one level deeper
        emit_css(store, value as CSS_Object, selector, `${at_rule}${key}{`, classes);
      } else { // "&" in the key resolves to the selector built so far
        emit_css(store, value as CSS_Object, selector ? key.split("&").join(selector) : key, at_rule, classes);
      }
      continue;
    }
    if (value === undefined) continue; // conditional styles

    // camelCase → kebab-case; custom properties (--x) stay as is
    let css_property = key.startsWith("--") ? key : key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    // number → get_rem, number[] → map_rem; unitless properties pass through untouched
    let css_value = Array.isArray(value)
      ? (CSS_UNITLESS.has(key) ? value.join(" ") : map_rem(value))
      : typeof value === "number" && !CSS_UNITLESS.has(key) ? get_rem(value)
      : `${value}`;
    let declaration = `${css_property}:${css_value}`;
    let rule_key = `${at_rule}|${selector}|${declaration}`;
    let css_class = store.class_map.get(rule_key);

    if (css_class === undefined) { // first time this at-rule + selector + declaration is seen
      css_class = `a${get_hash(rule_key)}`;
      store.class_map.set(rule_key, css_class);
      // "&" in the final selector resolves to the class itself
      let class_selector = selector ? selector.replace(/&/g, `.${css_class}`) : `.${css_class}`;
      let at_close = at_rule ? "}".repeat((at_rule.match(/\{/g) || []).length) : "";
      store.css_buffer.push(`${at_rule}${class_selector}{${declaration}}${at_close}`);
    }
    classes.push(css_class); // nested-only styles also need their class on the element
  }
}

// Flush: returns the buffered rules and clears the buffer,
// so Box renders each rule exactly once via <style>
export function get_css(): string {
  let store = get_store();
  let css_text = store.css_buffer.join("");
  store.css_buffer = [];
  return css_text;
}
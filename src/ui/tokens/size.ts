// Types
export type Size = "default" | "xs" | "sm" | "md" | "lg" | "xl"; // export type
type Size_Value = Record<Size, number>;
type Group_Name = "screen" | "screen_padding";
export type Sizes_Name = `${Group_Name}_${Size}`; // export type

type Sizes = Record<Group_Name, Size_Value>;


// Object
export const SIZE: Sizes = {
  screen: {
    default:  390,
    xs: 576,
    sm: 768,
    md: 1024,
    lg: 1440,
    xl: 1920
  },
  screen_padding: {
    default:  8,
    xs: 16,
    sm: 32,
    md: 64,
    lg: 128,
    xl: 256
  }
} as const satisfies Sizes;


// Function
export function get_size(sizes_name: Sizes_Name): number {
  let [group_name, size_name] = sizes_name.split("_");
  return SIZE[group_name as Group_Name][size_name as Size];
}
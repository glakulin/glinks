import { get_color, type Colors_Name } from "@/ui/tokens";


// Types
type Icon_Set = "cod" | "custom" | "dev" | "extra" | "fa" | "fae" | "iec" | "indent" | "indentation" | "linux" | "md" | "oct" | "pl" | "ple" | "pom" | "seti" | "weather";
type Icon_Glyph = string;
export type Icon_Name = `nf-${Icon_Set}-${Icon_Glyph}`; // export type


interface Icon_Props {
  name: Icon_Name;
  size?: number;
  color?: Colors_Name;
}


// Component
export function Icon({ 
  name, size, color 
}: Icon_Props) {
  return (
    <i className={`nf ${name}`} 
      style={{ 
        fontSize: size, 
        color: color ? get_color(color) : undefined 
      }} />
  );
}

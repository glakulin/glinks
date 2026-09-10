import Link from "next/link";
import { Default_Props, Icon_Name } from "..";

export type CardLink_Props = {
  icon: Icon_Name;
  href: string;
} & Default_Props<typeof Link>;

export const strip_href = (href: string) =>
  href.replace(/^(https?:\/\/)?(www\.)?(mailto:)?/, "");
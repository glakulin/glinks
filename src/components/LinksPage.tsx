import type { ComponentType, ReactNode } from "react";
import { LINKS, type Links_Item } from "@/links";

export type Card_Link_Props = {
  icon: Links_Item["icon"];
  href: Links_Item["href"];
  children: ReactNode;
};

type Links_Page_Props = {
  Card: ComponentType<Card_Link_Props>;
  links?: readonly Links_Item[];
};

export function LinksPage({ Card, links = LINKS }: Links_Page_Props) {
  return (
    <>
      {links.map((link) => (
        <Card key={link.href} icon={link.icon} href={link.href}>
          {link.name}
        </Card>
      ))}
    </>
  );
}
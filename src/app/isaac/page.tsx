import { CardLinkIsaac } from "@/components";
import { LINKS } from "@/links";

export default function Page() {
  return (<>
    {LINKS.map((link) =>
      <CardLinkIsaac
        key={link.name}
        icon={link.icon}
        href={link.href}
      >
        {link.name}
      </CardLinkIsaac>
    )}
  </>);
}

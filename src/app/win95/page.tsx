import { CardLinkWin95 } from "@/components";
import { LINKS } from "@/links";

export default function Page() {
  return (<>
    {LINKS.map((link) =>
      <CardLinkWin95
        key={link.name}
        icon={link.icon}
        href={link.href}
      >
        {link.name}
      </CardLinkWin95>
    )}
  </>);
}

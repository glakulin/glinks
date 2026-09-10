import { CardLinkMinecraft } from "@/components";
import { LINKS } from "@/links";

export default function Page() {
  return (<>
    {LINKS.map((link) =>
      <CardLinkMinecraft
        key={link.name}
        icon={link.icon}
        href={link.href}
      >
        {link.name}
      </CardLinkMinecraft>
    )}
  </>);
}

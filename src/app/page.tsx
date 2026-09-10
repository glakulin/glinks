import { Flex, Logo_Full } from "@/components";
import { CardLink } from "@/components/CardLink";
import { LINKS } from "@/links";

export default function Page() {
  return (<>
    <Flex
      direction="column"
      align_items="center"
      padding={[32, 0]}
      css={{width: "100%"}}
      gap={56}
    >
      <Logo_Full />
      <Flex
        css={{width: "100%", maxWidth: 768}}
        direction="column"
        gap={32}
      >
        {LINKS.map((link) => 
          <CardLink
            key={link.name}
            icon={link.icon}
            href={link.href}
          >
            {link.name}
          </CardLink>
        )}
      </Flex>
    </Flex>
  </>);
}

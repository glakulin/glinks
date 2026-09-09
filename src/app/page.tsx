import { Flex, Icon_Name, Logo_Full } from "@/components";
import { CardLink } from "@/components/CardLink";

const LINKS: {
  name: string,
  icon: Icon_Name,
  href: string
}[] = [
  {
    name: "Telegram",
    icon: "nf-fa-telegram",
    href: "https://t.me/glakulin_tg"
  },
  {
    name: "YouTube",
    icon: "nf-fa-youtube",
    href: "https://www.youtube.com/@glakulin"
  },
  {
    name: "YouTube Chill",
    icon: "nf-fa-youtube",
    href: "https://www.youtube.com/@glakulinchill"
  },
  {
    name: "Twitch",
    icon: "nf-fa-twitch",
    href: "https://www.twitch.tv/glakulin"
  },
  {
    name: "GitHub",
    icon: "nf-fa-github",
    href: "https://github.com/glakulin"
  },
  {
    name: "Email",
    icon: "nf-md-at",
    href: "mailto:glakulin@yandex.ru"
  }
];

export default function Page() {
  return (<>
    <Flex
      direction="column"
      align_items="center"
      css={{width: "100%", paddingBottom: 56}}
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

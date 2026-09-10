import { Icon_Name } from "./components";

export type Links_Item = {
  name: string,
  icon: Icon_Name,
  href: string
}

export const LINKS: Links_Item[] = [
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
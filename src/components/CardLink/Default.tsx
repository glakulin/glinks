import Link from "next/link";
import { Flex, Icon, Text } from "..";
import { get_color } from "@/ui/tokens";
import { CardLink_Props, strip_href } from ".";

// Component
export function CardLink({
  children,
  css,
  icon,
  href,
  ...rest
}: CardLink_Props) {
  return (<>
    <Flex {...rest}
      className="transition"
      tag={Link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      align_items="center"
      padding={12}
      css={{
        "--color-hover": get_color("accent_5"),
        border: "3px solid",
        borderColor: get_color("gray_8"),
        cursor: "pointer",
        "&:hover": {
          borderColor: "var(--color-hover)",
          color: "var(--color-hover)",
          transform: "scale(1.05) rotate(1deg)",
          "i": {
            color: "var(--color-hover)",
            fontSize: 72,
            top: 10
          }
        },
        "&:active": {
          backgroundColor: get_color("gray_1")
        },

        ...css
      }}
    >
      <Flex direction="column" gap={12}>
        <Text size="heading_default" >{children}</Text>
        <Text size="body_xs" mono color="gray_8">{strip_href(href)}</Text>
      </Flex>
      <Icon color="gray_8" css={{position: "absolute", right: 12, top: 8}} name={icon} size={40} />
    </Flex>
  </>)
}
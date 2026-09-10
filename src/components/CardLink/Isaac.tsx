import Link from "next/link";
import localFont from "next/font/local";
import { Flex, Icon, Text, Box } from "..";
import { CardLink_Props, strip_href } from ".";

const upheaval = localFont({ src: "../../fonts/upheavtt.ttf", display: "swap" });
const team_meat = localFont({ src: "../../fonts/IsaacGame.ttf", display: "swap" });

const stairs_x = (pts: [string, string][]) => pts.map(([x, y], i) =>
  i === 0 ? [`${x} ${y}`] : [`${x} ${pts[i - 1][1]}`, `${x} ${y}`]
).flat();

const stairs_y = (pts: [string, string][]) => pts.map(([x, y], i) =>
  i === 0 ? [`${x} ${y}`] : [`${pts[i - 1][0]} ${y}`, `${x} ${y}`]
).flat();

const PANEL_SHAPE = `polygon(
  ${stairs_x([
    ["0px", "8px"], ["7%", "4px"], ["15%", "0px"], ["24%", "8px"], ["33%", "4px"],
    ["43%", "0px"], ["52%", "8px"], ["61%", "4px"], ["70%", "0px"], ["79%", "8px"],
    ["88%", "4px"], ["100%", "8px"],
  ]).join(", ")},
  ${stairs_y([
    ["100%", "20%"], ["calc(100% - 8px)", "32%"], ["100%", "44%"],
    ["calc(100% - 4px)", "56%"], ["calc(100% - 8px)", "68%"], ["100%", "80%"],
    ["calc(100% - 4px)", "92%"], ["100%", "calc(100% - 8px)"],
  ]).join(", ")},
  ${stairs_x([
    ["92%", "calc(100% - 8px)"], ["83%", "100%"], ["71%", "calc(100% - 4px)"],
    ["59%", "calc(100% - 8px)"], ["47%", "100%"], ["35%", "calc(100% - 4px)"],
    ["23%", "calc(100% - 8px)"], ["12%", "100%"], ["0px", "calc(100% - 8px)"],
  ]).join(", ")},
  ${stairs_y([
    ["0px", "88%"], ["4px", "76%"], ["0px", "63%"], ["8px", "50%"],
    ["0px", "37%"], ["4px", "24%"], ["0px", "12%"],
  ]).join(", ")}
)`;

const PIN = [
  "4px 0 #35302a", "6px 0 #35302a", "8px 0 #35302a", "10px 0 #35302a",
  "2px 2px #35302a", "4px 2px #cbc5ba", "6px 2px #cbc5ba", "8px 2px #9d968b", "10px 2px #9d968b", "12px 2px #35302a",
  "2px 4px #35302a", "4px 4px #cbc5ba", "6px 4px #9d968b", "8px 4px #9d968b", "10px 4px #9d968b", "12px 4px #35302a",
  "0 6px #35302a", "2px 6px #9d968b", "4px 6px #9d968b", "6px 6px #9d968b", "8px 6px #9d968b", "10px 6px #9d968b", "12px 6px #9d968b", "14px 6px #35302a",
  "0 8px #35302a", "2px 8px #9d968b", "4px 8px #9d968b", "6px 8px #9d968b", "8px 8px #6f695f", "10px 8px #6f695f", "12px 8px #6f695f", "14px 8px #35302a",
  "2px 10px #35302a", "4px 10px #6f695f", "6px 10px #6f695f", "8px 10px #6f695f", "10px 10px #6f695f", "12px 10px #35302a",
  "4px 12px #35302a", "6px 12px #35302a", "8px 12px #35302a", "10px 12px #35302a",
].join(", ");

const px = (list: string[], color: string) => list.map(s => `${s} ${color}`).join(", ");
const DOODLE_HEART = px(
  ["2px 0", "4px 0", "8px 0", "10px 0",
   "0 2px", "2px 2px", "4px 2px", "6px 2px", "8px 2px", "10px 2px", "12px 2px",
   "0 4px", "2px 4px", "4px 4px", "6px 4px", "8px 4px", "10px 4px", "12px 4px",
   "2px 6px", "4px 6px", "6px 6px", "8px 6px", "10px 6px",
   "4px 8px", "6px 8px", "8px 8px",
   "6px 10px"],
  "var(--doodle)");
const DOODLE_CIRCLE = px(
  ["2px 0", "4px 0", "0 2px", "6px 2px", "0 4px", "6px 4px", "2px 6px", "4px 6px"],
  "var(--doodle_faint)");
const SCRATCH = px(
  ["0 10px", "2px 10px", "2px 8px", "4px 8px", "4px 6px", "6px 6px", "6px 4px", "8px 4px", "8px 2px", "10px 2px", "10px 0"],
  "var(--doodle_faint)");

const ARROW_SHAPE = "polygon(0 0, 8px 0, 8px 4px, 12px 4px, 12px 8px, 8px 8px, 8px 12px, 0 12px)";

// Component
export function CardLinkIsaac({
  children, css, icon, href, ...rest
}: CardLink_Props) {
  return (<>
    <style>{`
      @keyframes isaac_hit { 0% { transform: rotate(-1.2deg) translate(0,0) } 25% { transform: rotate(-1.2deg) translate(-4px,0) } 50% { transform: rotate(-1.2deg) translate(4px,2px) } 75% { transform: rotate(-1.2deg) translate(-2px,-2px) } 100% { transform: rotate(-1.2deg) translate(0,0) } }
    `}</style>

    <Flex {...rest}
      tag={Link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      align_items="center"
      gap={16}
      className="transition"
      padding={16}
      css={{
        "--ink":    "#2e2925",
        "--paper":  "#d9cca8",
        "--text":   "#3a342c",
        "--doodle": "#4a443a",
        "--doodle_faint": "rgba(58,52,44,.22)",
        "--title":  "#8d8375",
        "--icon":   "rgba(58,52,44,.35)",
        "--arrow":  "0",

        cursor: "pointer",
        color: "var(--title)",
        fontFamily: team_meat.style.fontFamily,
        transform: "rotate(-1.2deg)",

        "&:hover": {
          "--title": "var(--text)",
          "--icon":  "var(--text)",
          "--arrow": "1",
          "--paper": "#e6dab6",
        },
        "&:active": { animation: "isaac_hit .18s steps(1, end) 1" },
        ...css,
      }}
    >
      <Box css={{ position: "absolute", inset: 0, backgroundColor: "var(--ink)", clipPath: PANEL_SHAPE }} />

      <Box
        className="transition"
        css={{
          position: "absolute",
          inset: 3,
          backgroundColor: "var(--paper)",
          clipPath: PANEL_SHAPE,
          backgroundImage:
            "radial-gradient(120% 100% at 50% 40%, transparent 0 55%, rgba(58,52,44,.04) 55% 70%, rgba(58,52,44,.08) 70% 85%, rgba(58,52,44,.12) 85%)",
          boxShadow: "inset 0 0 0 2px rgba(58,52,44,.10)",
        }}
      />

      <Box css={{ position: "absolute", top: -8, left: "38%", width: 2, height: 2, boxShadow: PIN }} />

      <Box css={{ position: "absolute", top: 12, left: 18, width: 2, height: 2, boxShadow: DOODLE_HEART }} />

      <Box css={{ position: "absolute", top: 14, right: "10%", width: 2, height: 2, boxShadow: SCRATCH }} />
      <Box css={{ position: "absolute", bottom: 16, left: "28%", width: 2, height: 2, boxShadow: SCRATCH }} />
      <Box css={{ position: "absolute", bottom: "22%", right: "6%", width: 2, height: 2, boxShadow: DOODLE_CIRCLE }} />

      <Icon
        name={icon}
        size={48}
        css={{ position: "absolute", right: 24, top: "50%", marginTop: -24, color: "var(--icon)" }}
      />

      <Box className="transition" css={{
        width: 12, height: 12, flexShrink: 0,
        clipPath: ARROW_SHAPE,
        backgroundColor: "var(--text)",
        opacity: "var(--arrow)",
      }} />

      <Flex direction="column" gap={6} css={{ paddingRight: 56 }}>
        <Text
          className="card_title transition"
          size="heading_default"
          css={{ fontFamily: upheaval.style.fontFamily, color: "var(--title)", letterSpacing: 2 }}
        >
          {children}
        </Text>
        <Text
          size="body_sm"
          css={{ fontFamily: team_meat.style.fontFamily, color: "rgba(58,52,44,.5)", letterSpacing: 1 }}
        >
          {strip_href(href)}
        </Text>
      </Flex>
    </Flex>
  </>)
}
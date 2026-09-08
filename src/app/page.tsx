import { Box, Logo_Full } from "@/components";
import { COLORS } from "@/ui/tokens";

export default function Page() {
  return (<>
    <Logo_Full />
    <Box tag="button" css={{
      padding: 24,
      fontSize: 20,
      "&:hover": { color: COLORS.accent[3] },
      "&:focus-visible": { outline: "2px solid red" },
      "@media (min-width: 768px)": {
        padding: 32,
        "&:hover": { color: COLORS.gray[1] }
      }
    }}>Hi</Box>
    <Box css={{ padding: 24 }}>dedupe padding</Box>
    <Box css={{ opacity: 0, zIndex: 3, lineHeight: 1.4 }}>unitless</Box>
  </>);
}
